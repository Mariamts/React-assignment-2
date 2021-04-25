import { useContext } from 'react';

import { CommentsContext } from '../../../contexts/comments-provider/CommentsProvider';

function CommentListItem({ item }) {
  const { onItemClick } = useContext(CommentsContext);

  const onClick = () => {
    onItemClick(item.id);
  };

  return (
    <div
      className={`card comment-list-item text-white ${
        item.done ? 'bg-danger' : 'bg-primary'
      }`}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.email}</p>
        <p className="card-text">{item.body}</p>
        <button
          className={`btn ${item.done ? 'btn-warning' : 'btn-danger'}`}
          onClick={onClick}>
          {item.done ? 'REMOVE' : 'DONE'}
        </button>
      </div>
    </div>
  );
}

export default CommentListItem;
