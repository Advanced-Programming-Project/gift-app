import React from 'react';
import {Login} from './components';
import {InternsTable} from './components/InternsTable';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StudentInfo} from "./components/StudentInfo";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/students" element={<InternsTable/>}/>
        <Route path="/students/:id" element={<StudentInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
};
