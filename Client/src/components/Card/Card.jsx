import React, { useEffect, useState } from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav} from '../../redux/Actions/index';

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
   let [ isFav, setIsFav ] = useState(false);

   //estados globales
   let miFav = useSelector(state => state.myFavorites);

   let dispatch = useDispatch();

   useEffect(() => {
      miFav.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [miFav]);

   const handleFavorite = ()=>{
      if (isFav) {
         dispatch(removeFav(id));
         setIsFav(false);
      }else{
         let myNewChar = {
            id,
            name,
            species,
            gender,
            image
         }
         dispatch(addFav(myNewChar));
         setIsFav(true);
      }
   }

   return(
      <div className={gender === 'Male' ? divMale : divFemale   }>
         {
            isFav ? ( <button onClick={handleFavorite}>❤️</button>) 
            : ( <button onClick={handleFavorite}>🤍</button>)
         }
         {
            onClose ? <button onClick={()=>onClose(id)} className={btn}>X</button> : null
         }
         <Link to={`/detail/${id}`} >
            <h2 className={nameStyle}>{name}</h2> <p>{id}</p>
         </Link>
         <h2 className={data}>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" className={imageStyle} />
      </div>
   );
}

export default Card;