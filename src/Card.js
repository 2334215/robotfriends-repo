import React from 'react';

// okay it is just a function that recieves parameter then give the value.
// tegeheer haanaas parameter avah bilee.

const Card = ({name, email, id}) => {
    return (
        
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src = {`https://robohash.org/${id}?set=set3`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;


