import React, {useState} from 'react'
import item from '../../assets/small/highlights/Wizier_screenshot.jpg';

function CardList({category}){

const [items]=useState([
{
    name: 'Wizier',
    category: 'highlights',
    description: "This flashcard game was based upon a class assignment.  As a team we wanted to enhance and update that assignment to fulfill the needs of a user.  The user wanted to assist her child in learning some additional skills so she would do better on tests.  The entire code had to be refactored from the original assignment because the addition of the enhancements (namely the incorporation of API's) caused the page to stop working.  I worked on refactoring the code and adding the API capability with assistance from my teammates.  Others were in charge of the styling and the administration of the repository.  This project really helped me learn what it was like to work in a virtual team and to create a workable app, even when we never saw each other face to face"
},
{
    name: 'weather',
    category: 'highlights',
    description:"This project started as an assignment for a bootcamp class. This was the assignment where the javascript finally began to make sense to me.  I had to figure out how to fetch data from an API, take a specific piece of that data and feed it to a different API and then get the weather data back out from the second API.  It was working through that process, that I finally began to see the logic behind the Javascript and how the computer looks at it.  While there are problems with this web app,  I'm very proud of the work I did with it.  It was challenging and I had to think in different ways than I was accustomed to, but I was able to turn in a semi-workable product in the end."
},
{
    name: 'cutting Edge',
    category: 'highlights',
    description: "This project was a team project done as part of a bootcamp assignment.  It is an appointment scheduling application for a small hair salon.  It had some significant challenges for us to overcome while working on this Full stack project"
}

])

const currentItems=items.filter((item)=>item.category===category);


    return (
        <div>
        <div className="flex-row">
            {currentItems.map((app, i)=>(
                <img src={require(`../../assets/small/highlights/${item.name}.jpg`).default}
                alt={app.name}
                className="img-thumbnail mx-1"
                key={app.name}
                />
            )
            )
            }
        </div>
           
        </div>
    );


}


export default CardList;