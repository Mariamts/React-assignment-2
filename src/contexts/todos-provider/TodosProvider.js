import React, { useState, useEffect } from 'react';
import API_SERVICE from '../../services/api';

export const TodosContext = React.createContext(null);

function TodosProviderComponent({ children }) {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const newList = [...todoList, todo];
    setTodoList(newList);
  };

  const onItemClick = (itemId) => {
    const itemIndex = todoList.findIndex((item) => item.id === itemId);
    if (!todoList[itemIndex].completed) {
      const newListState = [
        ...todoList.slice(0, itemIndex),
        {
          ...todoList[itemIndex],
          completed: true,
        },
        ...todoList.slice(itemIndex + 1),
      ];
      setTodoList(newListState);
    } else {
      const newListState = todoList.filter((n) => n.id !== itemId);
      setTodoList(newListState);
    }
  };

  const loadTodoListAsync = async () => {
    const list = await API_SERVICE.getTodoListAsync({ start: 60, limit: 20 });
    setTodoList(list);
  };

  useEffect(() => {
    loadTodoListAsync();
  }, []);

  TodosContext.displayName = 'TodosContext';

  return (
    <TodosContext.Provider
      value={{ addTodo, onItemClick, todoList, setTodoList }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProviderComponent;
