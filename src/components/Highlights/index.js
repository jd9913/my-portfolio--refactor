import React, { useState } from "react";
import AppDetails from "../App-Details";




function Highlights() {
    
    const [detailsList, setDetails] = useState([
        {
          name: "weather",
          filename: "weather.png",
          alt: "weather app",
          desc:
            "This project started as an assignment for a bootcamp class. This was the assignment where the javascript finally began to make sense to me.  I had to figure out how to fetch data from an API, take a specific piece of that data and feed it to a different API and then get the weather data back out from the second API.  It was working through that process, that I finally began to see the logic behind the Javascript and how the computer looks at it.  While there are problems with this web app,  I'm very proud of the work I did with it.  It was challenging and I had to think in different ways than I was accustomed to, but I was able to turn in a semi-workable product in the end."
        },
        {
            name: "Wizier",
            filename: "Wizier.jpg",
            alt: "Wizier app",
            desc:
              "This project started as an assignment for a bootcamp class. This was the assignment where the javascript finally began to make sense to me.  I had to figure out how to fetch data from an API, take a specific piece of that data and feed it to a different API and then get the weather data back out from the second API.  It was working through that process, that I finally began to see the logic behind the Javascript and how the computer looks at it.  While there are problems with this web app,  I'm very proud of the work I did with it.  It was challenging and I had to think in different ways than I was accustomed to, but I was able to turn in a semi-workable product in the end."
          },
      ]);
 
 
 
    return (
<div>
  {detailsList.map(details=>{

   return <AppDetails details={ details }/>

  })}
</div>
    )}

export default Highlights;
