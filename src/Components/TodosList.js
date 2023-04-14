import TodoItem from './TodoItem';

/* const TodosList = (props, setTodos) => {
    return (
      <ul>
        {props.todosProps.map((todo) => (
          <TodoItem setTodos={setTodos} itemProp={todo} />
        ))}
      </ul>
    );
  };
  export default TodosList; */

const TodosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul className="item">
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
export default TodosList;
