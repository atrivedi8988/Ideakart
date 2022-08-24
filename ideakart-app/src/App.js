import logo from './logo.svg';
import './App.css';
import { AllRoute } from './Routes/AllRoute';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoute/>

      {/* <h1>Idea-Kart-WebSite</h1> */}
    </div>
  );
}

export default App;
