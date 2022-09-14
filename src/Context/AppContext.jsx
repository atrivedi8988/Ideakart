import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext()

export function AppContextProvider({children}){
    const [isAuth,setIsAuth] = useState(false)
    return <AppContext.Provider value={{isAuth,setIsAuth}}>{children}</AppContext.Provider>
}