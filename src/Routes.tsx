import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DetailPokemonPage } from './pages/DetailPokemon';
import {Home} from './pages/Home';

export const Routes = () =>{

    return(
    <Switch>
        <Route exact path="/:type" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pokemon/:nomePokemonUrl" component={DetailPokemonPage}  />
    </Switch>
    );
}