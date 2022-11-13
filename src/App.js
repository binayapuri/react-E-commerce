import React , { useState }  from "react";
import Login from "../src/Login/Login";
import Home from "../src/Home/Home";
import { BrowserRouter,Route, Routes } from  "react-router-dom";

import users from './users.json';
import ReactDOM from "react-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Login />} />
        <Route exact path="/login"  element={<Login />} />
        <Route exact path="/home"  element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;