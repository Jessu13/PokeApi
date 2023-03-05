import React from 'react';
import {Pokemones} from "./components/Pokemones";
import { Top } from './components/Top';
import './App.css';

function App() {
  return (
    <div className="App home-design">
      <Top></Top>
      <Pokemones></Pokemones>
    </div>
  );
}

export default App;
