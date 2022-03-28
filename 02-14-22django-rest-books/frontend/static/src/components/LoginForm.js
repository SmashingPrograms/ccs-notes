import {useState, useEffect} from "react";
import Cookies from 'js-cookie';

function LoginForm(props) {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleError = (err) => {
    console.log(err);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(state),
    };

    const response = await fetch('/rest-auth/login/', options).catch(
      handleError
    );

    if (!response.ok) {
      throw new Error('Network response not ok!')
    } else {
      const data = await response.json();
      Cookies.set('Authorization', `Token ${data.key}`);
      props.setAuth(true);
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleInput}
        required
        value={state.username}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleInput}
        required
        value={state.email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleInput}
        required
        value={state.password}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;