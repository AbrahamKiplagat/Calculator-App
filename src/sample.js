import React, { useState } from 'react';

const Sample = () => {
  const [name, setName] = useState();

  const onChange = () => {
    setName('Janet');
  };

  return (
    <div>
      <h1>This is a sample component {name}</h1>
      <button onClick={onChange}>Change Name</button>
    </div>
  );
}

export default Sample;





