import React from 'react';
import { Top } from './Top';
import Pikachu from '../img/pika.png'

export const PokemonInfo = () => {

    let type:string = 'home-design normal'
  return (
    <div className={type}>
        <Top></Top>
        <div className='cols base'>
            <div className='img-bag cols-img'>
                <div className='pokemon'>
                    <img src={Pikachu} alt="" />
                </div>
            </div>
            <div className='cols-op'>
                <h1>Nombre</h1>
                <h2>hp</h2>
                <h2>Power</h2>
                <h2>Region</h2>
                <h2>Tipo</h2>
            </div>
        </div>
    </div>
  )
}
