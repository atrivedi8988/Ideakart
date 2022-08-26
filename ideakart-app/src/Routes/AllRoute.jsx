import {Routes,Route} from "react-router-dom"
import { About } from "./About"
import { Contact } from "./Contact"
import { Home } from "./Home"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"

export function AllRoute(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/about" element={<About/>}  />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/sign_in" element={<SignIn/>}  />
            <Route path="/sign_up" element={<SignUp/>}  />
        </Routes>
    )
}