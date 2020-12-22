
import './App.css';

import About from './components/About';
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import ContactForm from "./components/Contact";


function App() {
  return (
    <div className="App">
    
    <Nav></Nav>
      
        <main>
          
          
      <Highlights/>
      <About></About>
      <ContactForm></ContactForm>
      
        </main>
      </div>
    
  );
}

export default App;
