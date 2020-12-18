import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import CardList from '../CardList';


function Cards(props) {
    const {currentCategory }= props;
    return(
        <section>
            <h1 data-testid="h1tag">
            {capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <CardList category={currentCategory.name}/>

        </section>
    );
}

export default Cards;