import logo from './logo.svg';
import './App.css';
import { AllRoute } from './Routes/AllRoute';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoute/>
      <Footer/>

      {/* <h1>Idea-Kart-WebSite</h1> */}
    </div>
  );
}

export default App;
