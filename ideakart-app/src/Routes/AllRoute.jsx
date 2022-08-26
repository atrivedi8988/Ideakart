import {Routes,Route} from "react-router-dom"
import { About } from "./About"
import { Home } from "./Home"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"

export function AllRoute(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/about" element={<About/>}  />
            <Route path="/contact" element={<h1>Contact Page</h1>}  />
            <Route path="/sign_in" element={<SignIn/>}  />
            <Route path="/sign_up" element={<SignUp/>}  />
        </Routes>
    )
}