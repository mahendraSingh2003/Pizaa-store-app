// src/App.js
import Menu from "./components/Menu";
import './App.css'; 
import Footer from "./components/Footer";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import DisplayAllItems from './components/DisplayAllItems';
import AddNewItem from './components/AddNewItem';
import UpdateItem from './components/UpdateItem';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     <Menu/>
       <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/items" element={<DisplayAllItems/>} />
        <Route path="/add" element={<AddNewItem/>} />
        <Route path="/UpdateItem/:id" element={<UpdateItem/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
    </>
  );
};

export default App;
