import React from  'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

// Geolocation API, built in JS
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    const text = season === 'winter' ? 'Burr, its Chilly' : 'Lets hit the beach'

    console.log(season);

    return (
        <div>
            <h1>{text}</h1>
        </div>
        );
};

export default SeasonDisplay;