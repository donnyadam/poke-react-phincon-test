import React from "react";
import Pokedex from "./components/pokedex";
import Detail from './pages/detail';
import "./styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Pokedex />} />
            <Route path="detail" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;