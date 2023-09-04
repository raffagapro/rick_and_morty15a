import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App () {
  //aqui va mi cerebroooooo
  let [characters, setCharacters] = useState([]);//memoria 1
  let [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  //emulacion de base de datos
  const username = 'batman@wayneinc.com';
  const password = 'iambatman123';

  const navigate = useNavigate();
  const location = useLocation();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }else{
      alert('A donde????')
    }
 }

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
      { location.pathname !== "/" ? <Nav onSearch={handleSearch} /> : undefined }
      </div>
      <hr />
      <Routes>
        {/* RUTA LANDING PAGE */}
        <Route path='/' element={
          <Form login={login} />
        }/>


        {/* RUTA HOME */}
        <Route path='/home' element={
          <Cards
            characters={characters}
            onClose={hndleOnClose}
          />
        }/>

        {/* RUTA ABOUT */}
        <Route path='/about' element={<About/>} />

        {/* RUTA DETAIL */}
        <Route path='/detail/:detailId' element={<Detail />} />

        {/* RUTA FAVORITES */}
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </div>
  )
}

export default App
