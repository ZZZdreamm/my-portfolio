import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router';
import { routes } from './routes';
import Menu from './Menu';
import HomePage from './LandingPage';
import LandingPage from './LandingPage';

function App() {
  return (
    <>
        <Routes>
          {
          routes.map((route)=>(
            <Route element={route.component()} path={route.path}/>
          ))}
        </Routes>
      </>
  );
}

export default App;
