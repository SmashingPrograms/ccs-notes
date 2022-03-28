import {useState} from 'react';
import React from "react";

const INITIAL_STATE = {
  name: '',
  age: '',
  color: '',
}

function TodoForm(props) {

  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim().length === 0) {
      return;
    }
    props.addTask(name);
    setName('');
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  )
}

export default TodoForm;