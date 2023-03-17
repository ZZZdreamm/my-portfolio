import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { routes } from './routes';
import Menu from './Menu';
import HomePage from './LandingPage';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {routes.map((route)=>(
            <Route element={route.component()} path={route.path}/>
          ))}
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
