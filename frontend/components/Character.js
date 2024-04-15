import React, { useState } from 'react';

function Character({ character, planets }) {
  const [showPlanetInfo, setShowPlanetInfo] = useState(false);

  const togglePlanet = () => {
    setShowPlanetInfo(!showPlanetInfo);
  };

  const planet = planets.find((planet) => planet.id === character.homeworld);

  console.log(character.name)
  console.log(planet.name)

  return (
    <div className='character-card' onClick={togglePlanet}>
        <h3 className='character-name'>{character.name}</h3>
      {showPlanetInfo && (
         <p>Planet: 
        <span className='character-planet'> {planet.name}</span>
         </p>
      )}
    </div>
  );
}

export default Character;

