import {PokemonDetails} from '../models/PokemonDetails'
import { formatPokemon } from '../utils/utils';

export async function elPokemon(name:string):Promise<PokemonDetails> {
    const response=await fetch(
        `https://pokeapi.co/api/v2/pokemon/${formatPokemon(name)}`
    )
    console.log(response);
    if(!response.ok){
        throw new Error('Failed to fetch Pokemon');
    }
    const results=await response.json();
    console.log(results);
    const pokemon={
        name:results.name,
        id:results.id,
        imgsrc:results.sprites.other.home.front_default,
        attack:results.stats[1].base_stat,
        defense:results.stats[2].base_stat,
        hp:results.stats[0].base_stat,
        tipo:results.types.map((element: any) => (element?.type)),
        altura:results.height,
        peso:results.weight,
        xp_base:results.base_experience,
        img_pres:results.sprites.other.home.front_default,
        img_cute:results.sprites.other.dream_world.front_default
    };
    
    return pokemon;
}
