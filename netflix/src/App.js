import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen';


function App() {
  const user=null;
  return (
    <div className="app">
      
      <BrowserRouter>
      {!user ? (
        <LoginScreen/>
      ):(
        <Routes>
        <Route path="/" element={<HomeScreen />}>
         
        </Route>
      </Routes>
      )}
      
    </BrowserRouter>
    </div>
  );
}

export default App;
