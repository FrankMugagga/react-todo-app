import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      setMessage('Please add item');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input className="input-text" value={title} type="text" placeholder="Add todo.." onChange={handleChange} />
        <br />
        {' '}
        <p>{title}</p>
        <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>

  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
