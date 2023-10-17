import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';

// import dotenv from 'dotenv';
// dotenv.config();

function App () {
  //aqui va mi cerebroooooo
  let [characters, setCharacters] = useState([]);//memoria 1
  let [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  //emulacion de base de datos
  // const username = 'batman@wayneinc.com';
  // const password = 'iambatman123';

  const navigate = useNavigate();
  const location = useLocation();

  async function login(userData) {
    const { username, password } = userData;

    const URL = 'http://localhost:3001/rickandmorty/login/';
    const res = await axios(URL + `?email=${username}&password=${password}`)
    const { access } = res.data;
    setAccess(access);
    access && navigate('/home');
 }

  const hndleOnClose = (id) => {
    setCharacters((prevState)=> prevState.filter((ch)=>ch.id !== id))
  };
  

  const handleSearch = async (characterID) =>{
    try {
      const { data }  = await axios(`http://localhost:3001/rickandmorty/character/${characterID}`)
      if (data.name) {
        setCharacters((prevState) => [...prevState, data]);
      } else {
          window.alert(`Hay un problema: ${data.error}`);
      }
    } catch (err) {
      console.log('hay un error');
    }
    
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
