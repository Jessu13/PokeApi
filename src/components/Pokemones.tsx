import React from 'react';
import { Pokemon } from './Pokemon';
import Pokeball from '../img/pokeball.png';
import Pikachu from '../img/pika.png';

export const Pokemones = () => {
  return (
    <div className='cols base'>
        <div className='img-bag cols-img'>
            <div className='pos-bag'>
                <img src={Pokeball} alt="" />
            </div>
            <div className='pokemon'>
                <img src={Pikachu} alt="" />
            </div>
        </div>
        <div className='cols-op'>
            <Pokemon></Pokemon>
            <Pokemon></Pokemon>
            <Pokemon></Pokemon>
        </div>
    </div>
  )
}
