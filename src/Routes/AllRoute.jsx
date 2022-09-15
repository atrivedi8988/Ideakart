import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "../Components/PrivateRoutes";
import { SingleCartPage } from "../Components/SingleCartPage";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export function AllRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route
        path="/about"
        element={
            <About />
        }
      />
      <Route
        path="/contact"
        element={
            <Contact />
        }
      />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route
        path="/siglebookpage/:id"
        element={
          <PrivateRoutes>
            <SingleCartPage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
