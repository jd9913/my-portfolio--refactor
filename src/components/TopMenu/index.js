import React from 'react';
import "./topmenu.css";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


function TopMenu() {

    const categories=[
        {
            name:"Highlights",
            description: "The projects that I've created or are working on",
            link: "#highlights",
            test: "highlight"
        },
        {
            name: "Contact",
            description:"Reach out to me",
            link: "#contact-form",
            test: "contact"
        }, 
        {
            name: "About Me",
            description: "Who am I",
            link: "#about",
            test: "about"
        }
        // {
        //     name: "resume",
        //     description: "a listing of my work experience"
        // },
        // {
        //     name:"education",
        //     description: "things I've done to better myself"
        // },
    ];

function categorySelected(){
    console.log("This is my profile page!")
}

    return (

      <Navbar>  
          <Navbar.Brand>
          <a data-testid='link' href="/">
              <span role="img" aria-label="sparkles" src="../../assets/images/logo/sparkles_2728.png">✨Jennifer!</span> 
          </a>
          </Navbar.Brand> 
           <Nav className="mr-auto">
              <Nav.Link className="menu-text">
                          
                  {categories.map((category)=>(
                      <li className="menu-text"
                      key={category.name} >
                          <a href={category.link} data-testid={category.test}>
                          <span onClick={categorySelected} >{category.name}</span>
                          </a>
                      </li>
                  ))}
              </Nav.Link>
          </Nav> 
          
        </Navbar>
    );
}

export default TopMenu;