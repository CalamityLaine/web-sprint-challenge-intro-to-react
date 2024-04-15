import React, {useState} from 'react';
import axios  from 'axios';
import App from './App';


//const urlPlanets = 'http://localhost:9009/api/planets'

function Character({character, showPlanet}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
 // const {characterId, hidePlanet} = props
 // const {world, setWorld} = useState(null)
 const [showPlanetInfo, setShowPlanetInfo] = useState(false)


 const togglePlanet = () => {
  setShowPlanetInfo(!showPlanetInfo);
 };
  
 return (
  <div className='character-card' onClick={togglePlanet}>
    <div className='character-name'>
      <h3 onClick={() => showPlanet(character.homeworld)}>{character.homeworld}</h3>
    </div>
    <p>
    {showPlanetInfo && (
      <span className='character-planet'>
        <p>Planet: {character.homeworld}</p>
      </span>
)}
</p>
  
  </div>
);
}

export default Character
