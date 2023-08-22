import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';

function App () {
  //aqui va mi cerebroooooo
  let [characters, setCharacters] = useState([]);//memoria 1

  const hndleOnClose = (id) => setCharacters((prevState)=> prevState.filter((ch)=>ch.id !== +id));
  

  const handleSearch = (characterID) =>{
    //API
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((prevState) => [...prevState, data]);
         } else {
            window.alert(`Hay un problema: ${data.error}`);
         }
    });
  }

  let myStyle = { padding: '25px' };
  return (
    <div className='App' style={myStyle}>
      <div>
        <Nav onSearch={handleSearch} />
      </div>
      <hr />
      <div>
      <h1>COMPONENTE CARDS</h1>
        <Cards
          characters={characters}
          onClose={hndleOnClose}
        />
      </div>
    </div>
  )
}

export default App
