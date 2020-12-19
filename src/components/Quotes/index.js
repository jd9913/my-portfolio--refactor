import React, { useState} from 'react'
import './quotes.css';

const Quotes=()=>{

    const [quote]=useState([
{
    quotation: "You can't go back and change the beginning, but you can start where you are and change the ending",
    author:  "C.S. Lewis"
}

    ])

    // const currentFavs=favs.filter((quote)=>quote.quotation===quotation);

    return(
        <div className="subheader">
{quote.map((quotes, index)=>(
    <div key={index} >
        {quotes.quotation}--{quotes.author}
         
    </div>
))}



        </div>
    )
}

export default Quotes;