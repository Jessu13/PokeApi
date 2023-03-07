import React from 'react';
import { Menu } from './menu/Menu';
import { PokemonInfo } from './components/PokemonInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      {
        //<Menu/> Aca va Menu, pero aun no he hecho el redirect a Pokemon info, entonces lo dejare ahi
      }
      <PokemonInfo></PokemonInfo>
    </div>
  );
}

export default App;