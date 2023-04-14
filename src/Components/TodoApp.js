import Header from './Header';
import TodosLogic from './TodosLogic';
import NavBar from './NavBar';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <TodosLogic />
      <NavBar />
    </div>
  </div>
);

export default TodoApp;
