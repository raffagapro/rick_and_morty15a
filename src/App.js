import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App () {
  //aqui va mi cerebroooooo

  const hndleOnClose = () => window.alert('Emulamos que se cierra la card');

  let myStyle = { padding: '25px' };
  return (
    <div className='App' style={myStyle}>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(`Hola, mira que me pasaron a APP: ${characterID}`)}
        />
      </div>
      <hr />
      <div>
        <h1>COMPONENTE CARD</h1>
        <Card     
          name={Rick.name} 
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={hndleOnClose}
        />
      </div>
      <hr />
      <div>
      <h1>COMPONENTE CARDS</h1>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
