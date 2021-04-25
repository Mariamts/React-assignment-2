import { useState, useContext } from 'react';


import { CommentsContext } from '../../../contexts/comments-provider/CommentsProvider';

function AddComment(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const { addComment } = useContext(CommentsContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      name,
      email,
      body,
      id: Math.random().toString(),
    };
    addComment(newComment);
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name - {name}
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="name"
          value={name}
          onChange={({ target }) => {
            setName(target.value);
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email - {email}
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          body
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="3"
          value={body}
          onChange={({ target }) => {
            setBody(target.value);
          }}
          required></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-md" >Add comment</button>
    </form>
  );
}

export default AddComment;