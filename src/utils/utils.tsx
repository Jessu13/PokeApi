export function formatPokemon(name:string): string{
    if(name.includes("♀")){
        return name.replace("♀", "-f");
    }
    else if(name.includes("♂")){
        return name.replace("♂", "-m");
    }
    else if(name.includes(". ")){
        return name.replace(". ", "-");
    }
    else if(name.includes("farfetch'd")){
        return name.replace("farfetch'd", "farfetchd");
    }else return name;
}