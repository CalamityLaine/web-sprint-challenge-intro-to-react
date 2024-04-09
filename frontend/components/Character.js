import React from 'react'


function Character(name, planet) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
   <div className= 'character-card'>
   <h3 className= 'character-name'>{name}</h3>
    {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
