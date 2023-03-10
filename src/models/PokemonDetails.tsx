import { NamedTupleMember } from "typescript"
import { Tipo } from "./Tipo"

export interface PokemonDetails{
    name:string,
    id:number,
    imgsrc:string,
    hp:number|0,
    attack:number,
    defense:number,
    tipo:Tipo[]|any,
    altura:number,
    peso:number,
    xp_base:number,
    img_pres:string,
    img_cute:string
}