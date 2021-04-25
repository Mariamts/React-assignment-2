import React, { useState, useEffect } from 'react';
import API_SERVICE from '../../services/api'
export const CommentsContext = React.createContext(null);

function CommentsProviderComponent({ children }) {
  const [commentsList, setCommentList] = useState([]);

  const addComment = (comment) => {
    const newList = [...commentsList, comment];
    setCommentList(newList);
  };

  const onItemClick = (itemId) => {
    const newListState = commentsList.filter((n) => n.id !== itemId);
    setCommentList(newListState);
  };

  const loadCommentListAsync = async () => {
    const list = await API_SERVICE.getCommentListAsync({ start: 60, limit: 20 });
    setCommentList(list);
  };

  useEffect(() => {
    loadCommentListAsync();
  }, []);

  CommentsContext.displayName = 'CommentsContext';

  return (
    <CommentsContext.Provider
      value={{ addComment, onItemClick, commentsList, setCommentList }}>
      {children}
    </CommentsContext.Provider>
  );
}

export default CommentsProviderComponent;
