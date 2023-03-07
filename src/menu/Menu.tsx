import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pokemones } from "../components/Pokemones";
import { PokemonInfo } from '../components/PokemonInfo';

export const Menu = () => {
    return (
      <Router>
          <Routes>
              <Route path="/pokemons" element={<Pokemones/>}/>
              <Route path="/pokemons/:name" element={<PokemonInfo/>}/>
              <Route path="/" element={<Pokemones/>}/>
          </Routes>
      </Router>
    )
  }