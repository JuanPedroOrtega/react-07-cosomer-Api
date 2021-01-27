import React from 'react';

function DisplaySimpson({ simpson }) {
  return (
    <div className="DisplayEmployee">
      <img
        src={simpson.image}
        alt={simpson.character}
      />
      <h1>{simpson.character}</h1>
      <p>I'm back to the {simpson.characterDirection}</p>
      <p>{simpson.quote}</p>
    </div>
  );
};

  

export default DisplaySimpson;