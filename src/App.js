import { useState } from 'react';
import { sculptureList } from './data.js';

function App() {
 const [index, setIndex] = useState(0);
  function handleClickNext() {
    if(sculptureList.length - 1 === index){
      setIndex(0)
    }
    else{
      setIndex(index + 1);
    }
  }

  function handleClickBack() {
    setIndex(index - 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
        <button onClick={handleClickNext}>
          Next
        </button>
      {index !== 0 ? <button onClick={handleClickBack}>Back</button> : null}
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

export default App;
