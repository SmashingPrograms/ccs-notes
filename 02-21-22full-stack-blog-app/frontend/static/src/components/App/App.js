import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './../Header/Header';

import ProfileForm from './../Profiles/ProfileForm';

function App() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <Header />
      <Outlet context={[navigate]} />
    </div>
  );
}

export default App;
