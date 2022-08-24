import {Routes,Route} from "react-router-dom"
import { Home } from "./Home"

export function AllRoute(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/about" element={<h1>About Page</h1>}  />
            <Route path="/contact" element={<h1>Contact Page</h1>}  />
            <Route path="/sign_in" element={<h1>SignIn Page</h1>}  />
            <Route path="/sign_up" element={<h1>SignUp Page</h1>}  />
        </Routes>
    )
}