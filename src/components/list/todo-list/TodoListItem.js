import { useContext } from 'react';
import { TodosContext } from '../../../contexts/todos-provider/TodosProvider';

function TodoListItem({ item }) {
  const { onItemClick } = useContext(TodosContext);

  const onClick = () => {
    onItemClick(item.id);
  };

  return (
    <div
      className={`card todo-list-item text-white ${
        item.completed ? 'bg-danger' : 'bg-primary'
      }`}>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <button
          className={`btn ${item.completed ? 'btn-warning' : 'btn-danger'}`}
          onClick={onClick}>
          {item.completed ? 'REMOVE' : 'Complete'}
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;
