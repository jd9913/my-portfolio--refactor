
import './App.css';

import About from './components/About';
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";


function App() {
  return (
    <div className="App">
    
    <Nav></Nav>
      
        <main>
          <About></About>
          
      <Highlights/>
      
        </main>
      </div>
    
  );
}

export default App;
