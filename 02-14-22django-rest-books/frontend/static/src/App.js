import {useState, useEffect} from "react";
import Cookies from 'js-cookie';

import LoginForm from './components/LoginForm';
import BookList from './components/BookList';


function App() {
  const [auth, setAuth] = useState(!!Cookies.get('Authorization'));

  return (
    <>
      {auth ? <BookList /> : <LoginForm setAuth={setAuth} />}
    </>
  );
};

export default App;
