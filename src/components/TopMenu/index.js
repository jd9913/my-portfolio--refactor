import React from 'react';
import "./topmenu.css";

import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';


function TopMenu() {

    const categories = [
        {
            name: "Highlights",
            description: "The projects that I've created or are working on",
            link: "#highlights",
            test: "highlight"
        },
        {
            name: "Contact",
            description: "Reach out to me",
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

    function categorySelected() {
        console.log("This is my profile page!")
    }

    return (

        <Container className="grid-container" data-testid='link' href="/" >
            <Nav id="brand">
                <span role="img" aria-label="sparkles" src="../../assets/images/logo/sparkles_2728.png">✨Jennifer!</span>

                {categories.map((category, index) => (
                    <Nav.Item className="mr-auto">
                        <Nav href={category.link} eventKey={index} data-testid={category.test} />
                        <span onClick={categorySelected} >{category.name}</span>
                    </Nav.Item>
                ))}
            </Nav>

        </Container>
    );
}

export default TopMenu;