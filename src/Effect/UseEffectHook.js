import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  const [personIndex, setPersonIndex] = useState(0);

  const people = [
    { age: 22, name: 'Lavis' },
    { age: 33, name: 'Kipla' },
    { age: 35, name: 'Chemelil' },
  ];

  const currentPerson = people[personIndex];

  // Use useEffect to update the document title when the person changes
  useEffect(() => {
    document.title = `Your age is ${currentPerson.age} and your name is ${currentPerson.name}`;
  }, [currentPerson]);

  const nextPerson = () => {
    setPersonIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  return (
    <div>
      <p>Your Age is {currentPerson.age} and your name is {currentPerson.name}</p>
      <button onClick={nextPerson}>Next Person</button>
    </div>
  );
}

export default UseEffectHook;