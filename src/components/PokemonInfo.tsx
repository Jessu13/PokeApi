import React, {useState,useEffect} from 'react';
import { Top } from './Top';
import Pokeball from '../img/pokeball.png'
import { useNavigate, useParams } from 'react-router-dom'
import { PokemonDetails } from '../models/PokemonDetails';
import { elPokemon } from '../api/fetchPokemon';
import * as estilo from '../styles_va/styles.css';

export const PokemonInfo = () => {

    const [pokemon, setpokemon] = useState<PokemonDetails>();
    const {name}=useParams();
    const navigate = useNavigate();
    
    let width_hp = {
        per: {width: `${pokemon?.hp}%`, background: "green"},
    };
    if (pokemon?.hp != null && pokemon?.hp > 100) {
        width_hp.per = {
            width: "100%", background: "red"
        }
    }

    let width_pw = {
        per: {width: `${pokemon?.attack}%`, background: "green"},
    };
    if (pokemon?.attack != null && pokemon?.attack > 100) {
        width_pw.per = {
            width: "100%", background: "red"
        }
    }

    let width_df = {
        per: {width: `${pokemon?.defense}%`, background: "green"},
    };
    if (pokemon?.defense != null && pokemon?.defense > 100) {
        width_df.per = {
            width: "100%", background: "red"
        }
    }

    let width_xp = {
        per: {width: `${pokemon?.xp_base}%`, background: "green"},
    }
    if (pokemon?.xp_base != null && pokemon?.xp_base > 100) {
        width_xp.per = {
            width: "100%", background: "red"
        }
    }

    useEffect(() => {
        const fetchPokemon=async()=>{
            const allpokemon = await elPokemon(name as string);
            setpokemon(allpokemon);
          }
          fetchPokemon();
    }, [name])

    console.log(`${pokemon?.name} es la verga`)
    console.log(pokemon?.tipo)
    console.log(`El tipo obtenido en la pos 0 es: ${pokemon?.tipo[0].name}`)

    let type:string = 'home-design normal'
  return (
    <div className={type}>
        <Top></Top>
        <button className='pokeballbutton' onClick={() => navigate(-1)}>
            <img className='pokeballimage' src={Pokeball} alt="Imagen botón" /> {" "}Go Back
        </button>
        <div className='cols base'>
            <div className='refimg cols-img'>
                <div className='ajuste'>
                    <img src={pokemon?.img_cute} alt="dream_world" className='dreamPoke'/>
                </div>
            </div>
            <div className='cardInfo' >
                <h1>{name?.toUpperCase()}</h1>
                <h2><span>HP: {pokemon?.hp}</span></h2>
                <div className='sectionCont'><div className='container'><div className="per" style={width_hp.per}></div></div></div>
                <h2>POWER: {pokemon?.attack}</h2>
                <div className='sectionCont'><div className='container'><div className='per' style={width_pw.per}></div></div></div>
                <h2>Defense: {pokemon?.defense}</h2>
                <div className='sectionCont'><div className='container'><div className='per' style={width_df.per}></div></div></div>
                <h2>Experiencia base: {pokemon?.xp_base}</h2>
                <div className='sectionCont'><div className='container'><div className='per' style={width_xp.per}></div></div></div>
                <h2>Altura: {pokemon?.altura}</h2>
                <h2>Peso: {pokemon?.peso}</h2>
                <h2>Tipos: {pokemon?.tipo[0].name}</h2>
                <img src={pokemon?.img_pres} alt="sornero" className='pokeImg_border'/>
            </div>
        </div>
    </div>
  )
}
