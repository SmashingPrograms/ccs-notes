import {useState} from 'react';

function TodoDetail(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName('');
    setEditing(false);
  }

  const editHTML = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>New name for {props.name}</label>
        <input id={props.id} className="todo-text" type="text" value={newName} onChange={handleChange} />
      </div>
      <div className="btn-group">
        <button type="submit" className="btn btn__primary todo-edit">Save</button>
        <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>Cancel</button>
      </div>
    </form>
  );

  const detailHTML = (
    <li className="todo stack-small">
      
          <div className="c-cb">
            <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleCompletion(props.id)} />
            <label className="todo-label" htmlFor={props.id}>
              {props.name}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn" onClick={() => setEditing(true)}>
              Edit <span className="visually-hidden">{props.name}</span>
            </button>
            <button type="button" className="btn btn__danger" onClick={() => props.removeTask(props.id)}>
              Delete <span className="visually-hidden">{props.name}</span>
            </button>
          </div>
    </li>
  )

  return (
    <>
    {isEditing ? editHTML : detailHTML}
    </>
  )
}

export default TodoDetail;