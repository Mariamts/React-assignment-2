import AddTodo from '../../components/forms/add-todo';
import TodoList from '../../components/list/todo-list';
import TodosProviderComponent from '../../contexts/todos-provider/TodosProvider';

function Todos(props) {
  return (
    <TodosProviderComponent>
      <div className="row">
        <div className="col-4">
          <AddTodo />
        </div>

        <div className="col-8 d-flex flex-wrap">
          <TodoList />
        </div>
      </div>
    </TodosProviderComponent>
  );
}
export default Todos;
