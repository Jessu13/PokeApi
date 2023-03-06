export async function todosLosPokemon() {
    const response=await fetch(
        'https://unpkg.com/pokemons@1.1.0/pokemons.json'
    )
    console.log(response);
    if(!response.ok){
        throw new Error('Failed to fetch Pokemon');
    }
    const {results}=await response.json();
    console.log(results);
    const pokemons=results.map((pokemon:any)=>({
            name:pokemon.name,
            id:pokemon.national_number,
            imgsrc:`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}.gif`,
        })
    );
    
    const uniquePokemons=pokemons.filter(
        (pokemon:any,index:number)=>
        pokemons.findIndex((other:any)=>other.id===pokemon.id)===index
    )
    console.log(uniquePokemons);
    return uniquePokemons;
}