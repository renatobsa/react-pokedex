import react from 'react';
import { NotFound } from './style';

type PokemonErrorProps = {
    message:string
}



export const PokemonError = ({message}:PokemonErrorProps) =>{

    return (
        <> 
        <NotFound>
        </NotFound>
        <div style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
        <h1>{message}</h1>
        </div>
        </>
    )

}