import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from "./components/Nav";
import Cards from "./components/Cards";


function App() {

  const [categories]= useState([
    {
        name:"highlights",
        description: "The projects that I've created or are working on"
    },
    {
        name: "resume",
        description: "a listing of my work experience"
    },
    {
        name:"education",
        description: "things I've done to better myself"
    },
]);

const [currentCategory, setCurrentCategory]=useState(categories[0]);


  return (
    <div className="App">
     
    <Nav 
    categories={categories}
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory}
    ></Nav>
      
      
        <main>
        <Cards></Cards>
          <About></About>
        </main>
      </div>
    
  );
}

export default App;
