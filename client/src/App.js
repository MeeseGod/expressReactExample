import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import Users from './components/User';
import Test from "./components/Test";

export default function App(){
  return(
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" exact element={<Users/>} />
      <Route path="/test" element={<Test/>} />
    </Routes>
  </HashRouter>
  )
}