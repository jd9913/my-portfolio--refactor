import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import CardList from '../CardList';


function Cards({currentCategory}) {
    const {name, description }= currentCategory;
    return(
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <CardList category={currentCategory.name}/>

        </section>
    );
}

export default Cards;