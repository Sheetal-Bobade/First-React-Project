import { createContext } from "react";

export const Name = createContext();

function Context({children}){
    const N = "Sheetal"
    return(    
    <Name.Provider value={N}>
        {children}
    </Name.Provider>
    )
}

export {Context};
