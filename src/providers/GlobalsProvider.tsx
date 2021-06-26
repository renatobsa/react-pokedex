import React, { createContext, useContext, useState } from 'react';

interface GlobalsProvider {
    pokeList:any[]
    loading: boolean,
    setLoading:(loading:boolean)=>void,
    setPokeList:(pokeList:any)=>void
}

export const GlobalsContext = createContext<GlobalsProvider>({} as GlobalsProvider)

export const GlobalsProvider = (props:any) =>{
    const [pokeList, setPokeList] = useState<any|null>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSetPokeList = (pokeList:any)=>{
        setPokeList(pokeList)
    }
    const handleSetLoading = (loading:boolean)=>{
        setLoading(loading)
    }

    return (
        <GlobalsContext.Provider value={{pokeList, setPokeList:handleSetPokeList,loading,setLoading:handleSetLoading} }>
         {props.children}
        </GlobalsContext.Provider>
    )
};
export const useGlobalsProvider = () => useContext(GlobalsContext);
