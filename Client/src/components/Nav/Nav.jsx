import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
//styles
import styles from './Nav.module.css';

let { nav, link } = styles;

let Nav = ({onSearch}) =>{
   //stados locales
   //logica local
   //functiones locales

   return(
    <div className={nav}>
        <Link className={link} to={'/about'}>About</Link>
        <Link className={link} to={'/favorites'}>Favorites</Link>
        <Link className={link} to={'/home'}>Home</Link>
        <SearchBar onSearch={ onSearch }/>
    </div>
   );
}

export default Nav;