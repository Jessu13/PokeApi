import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pokemones } from "../components/Pokemones";

export const Menu = () => {
    return (
      <Router>
          <Routes>
              <Route path="/pokemons" element={<Pokemones/>}/>
              <Route path="/" element={<Pokemones/>}/>
          </Routes>
      </Router>
    )
  }