import { useState, useContext } from 'react';


import { TodosContext } from '../../../contexts/todos-provider/TodosProvider';

function AddTodo(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const { addTodo } = useContext(TodosContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      title,
      description,
      completed,
      id: Math.random().toString(),
    };
    addTodo(newTodo);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title - {title}
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
          }}
          required></textarea>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="completed"
          onChange={({ target }) => {
            setCompleted(target.checked);
          }}
        />
        <label className="form-check-label" htmlFor="completed">
          complete
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-md" >Add todo</button>
    </form>
  );
}

export default AddTodo;