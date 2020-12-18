import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Cards() {
    return(
        <section>
            <h1>{capitalizeFirstLetter('NAME')}</h1>
            <p>DESCRIPITION</p>

        </section>
    );
}

export default Cards;