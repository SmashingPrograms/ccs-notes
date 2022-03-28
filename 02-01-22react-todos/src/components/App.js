import {useState} from 'react';
import FilterButton from './FilterButton.js';
import TodoDetail from './TodoDetail.js';
import TodoForm from './TodoForm.js';

const DATA = [
  {
    name: 'Eat',
    id: 1,
    completed: true,
  },
  {
    name: 'Sleep',
    id: 2,
    completed: false,
  },
  {
    name: 'Rave',
    id: 3,
    completed: false,
  },
  {
    name: 'Repeat',
    id: 4,
    completed: false,
  },
];

function App(props) {
  const [todos, setTodos] = useState(DATA);
  const [uid, setUID] = useState(5);
  const addTask = (name) => {
    const newTodo = {
      id: uid,
      name,
      completed: false,
    }
    setTodos([newTodo, ...todos]);
    setUID(uid + 1)
  }

  const toggleCompletion = (id) => {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex(todo => todo.id === id);
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  const removeTask = (id) => {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex(todo => todo.id === id);
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  const editTask = (id, name) => {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex(todo => todo.id === id);
    updatedTodos[index].name = name;
    setTodos(updatedTodos);
  }

  const todoList = todos.map(todo => <TodoDetail key={todo.id} {...todo} toggleCompletion={toggleCompletion} removeTask={removeTask} editTask={editTask} />)
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <TodoForm addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        {todos.length} {(todos.length === 1) ? "task" : "tasks"} remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todoList}
      </ul>
    </div>
  );
}

export default App;