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
  const addTask = (name) => {
    const newTodo = {
      id: 5,
      name,
      completed: false,
    }

    setTodos([...todos, newTodo]);
  }

  const todoList = todos.map(todo => <TodoDetail key={todo.id} {...todo} />)
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
        3 tasks remaining
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