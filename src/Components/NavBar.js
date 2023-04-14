import { useState, useRef } from 'react';

const NavBar = () => {
  const [state, setState] = useState({ fname: '', lname: '', message: '' });

  const [check, setCheck] = useState({ isChecked: false });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleChangeCheck = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState({
      ...state, [e.target.name]: value,
    });
  };

  return (
    <>

      <form>
        <label>
          <input value={state.fname} type="text" name="fname" onChange={handleChange} />
        </label>

        <label>
          <input value={state.lname} type="text" name="lname" onChange={handleChange} />
        </label>

        <label>
          <textarea
            rows="10"
            column="5"
            value={state.message}
            type="message"
            name="message"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChangeCheck}
          />
          Chec
        </label>
      </form>

      <h5>
        First name:
        {state.fname}
        {' '}
        and last name:
        {state.lname}
      </h5>
      <p>
        Message:
        {state.message}
      </p>

      <h4>
        Is it checked?:
        {state.isChecked ? 'yes' : 'No'}
      </h4>
    </>

  );
};

export default NavBar;
