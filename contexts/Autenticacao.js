import React,{createContext, useState,useContext} from 'react';

 const AutenticaContext=createContext();

export default function AutenticaProvider({children}){
    const [Autentic,setAutentic]=useState(false);
   

    return (
        


    <AutenticaContext.Provider
    value={{
        Autentic,
        setAutentic
    }}
    >
        {children}
        </AutenticaContext.Provider>
    
    ) ;
}

export function useAutentic(){
    const context=useContext(AutenticaContext);
    const {Autentic,setAutentic}=context;
    return {Autentic,setAutentic};
}