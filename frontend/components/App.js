import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
const [characters, setCharacters] = useState([]);
const [currentCharacterId, setCurrentCharacterId] = useState(null);
const [currentPlanet, setCurrentPlanet] = useState([]);

const showPlanet = id => {
 setCurrentCharacterId(id)
};
//const hidePlanet = () => {
//  setCurrentCharacterId(null);
//  setCurrentPlanet(null);
//};

useEffect(() => {

    axios.get(urlPeople)
    .then((res) => {
      setCharacters(res.data);
     // console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message)
    });
  }, []);

useEffect(() => {
//if (currentCharacterId !== null) {
//  const character = characters.find((char) => char.id === currentCharacterId);
//if (character) {
  axios.get(urlPlanets)
 // axios.get(urlPlanets)
  .then((res) => {
    setCurrentPlanet(res.data);
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err.message);
  });

}, [])

 //[currentCharacterId, characters];

//if (!data) return <p>Fetching data...</p>

  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      <div>
    {characters.map((character) => (
      <div className="character-card" key={character.id}>
        <div className="character-name">
         <h3 onClick= {() => showPlanet(character.id)}>{character.name}</h3>
          {/* Render other character information here if needed */}
         <p>
        {currentCharacterId === character.id && (
          <span className="character-planet">

            {currentPlanet ? (
              <p>{`Planet: ${currentPlanet.name}`}</p>
            ) : ( 
            <p>Loading...</p> )
             )}
         </span>
         )}
       </p>
    </div> 
  </div>   
  ))}  
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
     </div>
  </div>
  );
}



export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
