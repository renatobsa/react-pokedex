import grass from '../assets/icons/grass.svg'
import fire from '../assets/icons/fire.svg'
import water from '../assets/icons/water.svg'
import bug from '../assets/icons/bug.svg'
import normal from '../assets/icons/normal.svg'
import poison from '../assets/icons/poison.svg'
import electric from '../assets/icons/electric.svg'
import ground from '../assets/icons/ground.svg'
import fairy from '../assets/icons/fairy.svg'
import fighting from '../assets/icons/fighting.svg'
import psychic from '../assets/icons/psychic.svg'
import ghost from '../assets/icons/ghost.svg'
import rock from '../assets/icons/rock.svg'
import ice from '../assets/icons/ice.svg'
import dragon from '../assets/icons/dragon.svg'
import dark from '../assets/icons/dark.svg'
import steel from '../assets/icons/steel.svg'
import flying from '../assets/icons/flying.svg'

const API_BASE = 'https://pokeapi.co/api/v2/';

export const requestApi = async (endpoint:string) => {
    return (await fetch(`${API_BASE}${endpoint}`)).json();
}
export const getColorPokemon = (type:any) =>{
    let color = '';
    switch (type.name) {
        case "grass":
            color = 'green'  
        break;    
        case "fire":
            color = 'red'  
        break;    
        case "water":
            color = 'blue'  
        break;   
        case "electric":
            color = 'yellow'  
        break;  
        case "normal":
            color = 'normal'  
        break;   
        case "dark":
            color = 'black'  
        break;
        case "psychic":
            color = 'pink'  
        break;    
        case "ghost":
            color = 'ghost'  
        break;   
        case "ground":
            color = 'brown'  
        break; 
        case "bug":
            color = 'bug'  
        break;
        case "fighting":
            color = 'fighting'  
        break;  
        case "poison":
            color = 'purple'  
        break;
        case "ice":
            color = 'ice'  
        break;
        case "dragon":
            color = 'dragon'  
        break;
        case "fairy":
            color = 'fairy'  
        break;
        case "steel":
            color = 'steel'  
        break;
        case "rock":
            color = 'rock'  
        break;
        case "flying":
            color = 'flying'  
        break;
        case "flying":
            color = 'flying'  
        break;
        case "flying":
            color = 'flying'  
        break;
        default:
            color = 'all'
        break;
    }
   return color;
}
export const getIconType = (type:any) =>{
    let icon = '';
    switch (type.name) {
        case "grass":
            icon = grass 
        break;    
        case "fire":
            icon = fire 
        break;
        case "water":
            icon = water
        break;     
        case "bug":
            icon = bug
        break; 
        case "normal":
            icon = normal
        break;  
        case "poison":
            icon = poison
        break;  
        case "electric":
            icon = electric
        break;  
        case "ground":
            icon = ground
        break;    
        case "fairy":
            icon = fairy
        break;   
        case "fighting":
            icon = fighting
        break;   
        case "psychic":
            icon = psychic
        break;      
        case "ghost":
            icon = ghost
        break;   
        case "rock":
            icon = rock
        break;  
        case "ice":
            icon = ice
        break; 
        case "dragon":
            icon = dragon
        break;    
        case "dark":
            icon = dark
        break;  
        case "steel":
            icon = steel
        break; 
        case "flying":
            icon = flying  
        break;                
        default:
            icon = 'all'
        break;
    }
   return icon;
}