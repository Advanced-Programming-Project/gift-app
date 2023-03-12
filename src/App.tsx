import React from 'react';
import {Login} from './components';
import {InternsTable} from './components/InternsTable';
import {BrowserRouter, Routes, Route} from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InternsTable/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};
