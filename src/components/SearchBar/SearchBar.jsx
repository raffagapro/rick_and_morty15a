import React from "react";

export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>{onSearch('Sol1!!')}}>Agregar</button>
      </div>
   );
}
