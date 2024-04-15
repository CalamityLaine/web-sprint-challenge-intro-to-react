import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPeople = 'http://localhost:9009/api/people';
const urlPlanets = 'http://localhost:9009/api/planets';

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [charactersResponse, planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets)
        ]);
        setCharacters(charactersResponse.data);
        setPlanets(planetsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Rest of the component code...

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on
       completing this challenge</p>
      <div>
        {/* Map over characters, render Character component */}
        {characters.map((character) => (
          <Character key={character.id} character={character} planets={planets} />
        ))}
      </div>
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
