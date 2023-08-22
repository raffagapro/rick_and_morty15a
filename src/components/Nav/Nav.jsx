import React from "react";
import SearchBar from '../SearchBar/SearchBar';
//styles
import styles from './Nav.module.css';

let { nav } = styles;

let Nav = ({onSearch}) =>{
   //stados locales
   //logica local
   //functiones locales

   return(
    <div className={nav}>
        <SearchBar onSearch={ onSearch }/>
    </div>
   );
}

export default Nav;