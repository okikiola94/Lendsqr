import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './components/login/login';
import Dashboard from './components/UserDashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <Routes>
      <Route path='/' element ={<Dashboard/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
