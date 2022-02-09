import React from 'react';
import Card from './Card'

//okay it is also a function.
// it recieves robots as parameter
// then returns 

const Cardlist = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} />
                    );
                })
        }
        </div>
    )
}

export default Cardlist;