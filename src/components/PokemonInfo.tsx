import React, {useState,useEffect} from 'react';
import { Top } from './Top';
import Pikachu from '../img/pika.png'
import Pokeball from '../img/pokeball.png'
import { useNavigate, useParams } from 'react-router-dom'
import { PokemonDetails } from '../models/PokemonDetails';
import { elPokemon } from '../api/fetchPokemon';

export const PokemonInfo = () => {

    const [pokemon, setpokemon] = useState<PokemonDetails>();
    const {name}=useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemon=async()=>{
            const allpokemon = await elPokemon(name as string);
            setpokemon(allpokemon);
          }
          fetchPokemon();
    }, [name])

    let type:string = 'home-design normal'
  return (
    <div className={type}>
        <Top></Top>
        <button className='pokeballbutton' onClick={() => navigate(-1)}>
            <img className='pokeballimage' src={Pokeball} alt="Imagen botón" /> {" "} Ir Atrás
        </button>
        <div className='cols base'>
            <div className='img-bag cols-img'>
                <div className='pokemon'>
                    <img src={pokemon?.imgsrc} alt="" />
                </div>
            </div>
            <div className='cols-op'>
                <h1>{name?.toUpperCase()}</h1>
                <h2><span>HP: {pokemon?.hp}</span></h2>
                <h2>POWER: {pokemon?.attack}</h2>
                <h2>Region</h2>
                <h2>Tipo</h2>
            </div>
        </div>
    </div>
  )
}
