import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../img/pokeball.png';
import Pikachu from '../img/pika.png';
import { todosLosPokemon } from '../api/fetchPokemons';
import { IPokemon } from '../models/IPokemon';
import { Top } from './Top';

export const Pokemones = () => {
  const [query, setquery] = useState("");
  const [pokemon, setpokemon] = useState<any>([]);
    useEffect(() => {
      const fetchPokemon=async()=>{
        const allpokemon = await todosLosPokemon();
        setpokemon(allpokemon);
      }
      fetchPokemon();
    }, [])
    const filterPokemon=pokemon?.slice(0,650).filter((poke:any)=>{
        return poke.name.toLowerCase().match(query.toLowerCase());
    });
  return (
    <div className='home-design colorHome'>
      <Top/>
      <div className='cols base'>
        <div className='img-bag cols-img'>
            <div className='pos-bag'>
                <img src={Pokeball} alt="" />
            </div>
            <div className='pokemon'>
                <img src={Pikachu} alt="" />
            </div>
        </div>
        <div className='app cols-op'>
          <main> 
            <nav >
              {filterPokemon?.slice(0,650).map((poke:IPokemon)=>(
                  <Link to={`/pokemons/${poke.name.toLowerCase()}`} className='listItem' key={poke.id}>
                      <img src={poke.imgsrc} alt={poke.name} className='listIcon'/>
                    <div className='listItemText'>
                        <span className='nombre'>{poke.name}</span>
                        <span>{poke.id}</span>
                    </div>

                  </Link>
              ))}
    
            </nav>
          </main>
        </div>
      </div>
    
    </div>
  )
}
