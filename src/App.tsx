import React from 'react';
import {Login} from './components';
import {InternsTable} from './components/InternsTable';
import {BrowserRouter, Routes, Route} from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/students" element={<InternsTable/>} />
      </Routes>
    </BrowserRouter>
  );
};
