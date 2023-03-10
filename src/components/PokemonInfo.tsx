import React, {useState,useEffect} from 'react';
import { Top } from './Top';
import Pokeball from '../img/pokeball.png'
import { useNavigate, useParams } from 'react-router-dom'
import { PokemonDetails } from '../models/PokemonDetails';
import { elPokemon } from '../api/fetchPokemon';

export const PokemonInfo = () => {

    const [pokemon, setpokemon] = useState<PokemonDetails>();
    const {name}=useParams();
    const navigate = useNavigate();
    
    let width_hp = {
        per: {width: `${pokemon?.hp}%`, background: "#02b899"},
    };
    if (pokemon?.hp != null && pokemon?.hp > 100) {
        width_hp.per = {
            width: "100%", background: "#eb372b"
        }
    }

    let width_pw = {
        per: {width: `${pokemon?.attack}%`, background: "#02b899"},
    };
    if (pokemon?.attack != null && pokemon?.attack > 100) {
        width_pw.per = {
            width: "100%", background: "#eb372b"
        }
    }

    let width_df = {
        per: {width: `${pokemon?.defense}%`, background: "#02b899"},
    };
    if (pokemon?.defense != null && pokemon?.defense > 100) {
        width_df.per = {
            width: "100%", background: "#eb372b"
        }
    }

    let width_xp = {
        per: {width: `${pokemon?.xp_base}%`, background: "#02b899"},
    }
    if (pokemon?.xp_base != null && pokemon?.xp_base > 100) {
        width_xp.per = {
            width: "100%", background: "#eb372b"
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
    

    let type:string = `home-design ${pokemon?.tipo[Math.floor(Math.random()*(pokemon?.tipo.length))].name}`
    console.log(type)
    console.log(`El tipo obtenido es: ${Math.floor(Math.random()*(pokemon?.tipo.length))}`)

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
                <div className='par'>
                    <div className='dupla'>
                        <h2>HP</h2>
                        <div className='sectionCont'><div className='container'><div className="per" style={width_hp.per}><p>{pokemon?.hp}</p></div></div></div>
                    </div>
                    <div className='dupla'>
                        <h2>Attack</h2>
                        <div className='sectionCont'><div className='container'><div className='per' style={width_pw.per}><p>{pokemon?.attack}</p></div></div></div>
                    </div>
                </div>
                <div className="par">
                    <div className="dupla">
                        <h2>Defense</h2>
                        <div className='sectionCont'><div className='container'><div className='per' style={width_df.per}><p>{pokemon?.defense}</p></div></div></div>
                    </div>
                    <div className="dupla">
                        <h2>Base XP</h2>
                        <div className='sectionCont'><div className='container'><div className='per' style={width_xp.per}><p>{pokemon?.xp_base}</p></div></div></div>
                    </div>
                </div>
                <div className="par">
                    <div className="dupla"><h2>Altura__{pokemon?.altura}</h2></div>
                    
                    <div className="dupla"><h2>Peso__{pokemon?.peso}</h2></div>
                </div>
            
                <div className="par parteJerson">
                    { pokemon?.tipo.map((element:any) => <h2>{element.name} </h2>) }
                </div>
                <img src={pokemon?.img_pres} alt="sornero" className='pokeImg_border'/>
            </div>
        </div>
    </div>
  )
}
