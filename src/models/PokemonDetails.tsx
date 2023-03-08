import { NamedTupleMember } from "typescript"

export interface PokemonDetails{
    name:string,
    id:number,
    imgsrc:string,
    hp:number,
    attack:number,
    defense:number,
    tipo:string[],
    altura:number,
    peso:number,
    xp_base:number,
    img_pres:string,
    img_cute:string
}