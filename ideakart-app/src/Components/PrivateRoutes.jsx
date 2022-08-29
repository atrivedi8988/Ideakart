import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"

export function PrivateRoutes({children}){
    const {isAuth} = useContext(AppContext)

    if(isAuth==true){
        return <Navigate to="/sign_in"/>
    }
    return children
}