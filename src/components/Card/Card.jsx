import React, { useEffect } from "react";
import styles from './Card.module.css';
let { 
   divMale, 
   divFemale,
   btn, 
   nameStyle, 
   data, 
   imageStyle
} = styles;

//styles

let Card = ({name, species, gender, image, id, onClose}) =>{
   //stados locales
   //logica local
   //functiones locales

   return(
      <div className={gender === 'Male' ? divMale : divFemale   }>
         <button onClick={()=>onClose(id)} className={btn}>X</button>
         <h2 className={nameStyle}>{name}</h2>
         <h2 className={data}>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" className={imageStyle} />
      </div>
   );
}

export default Card;