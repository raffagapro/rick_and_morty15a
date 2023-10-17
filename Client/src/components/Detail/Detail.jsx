import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '../Card/Card';


const Detail = () => {
    let [character, setCharacter] = useState({});
    let { detailId } = useParams();

    useEffect(() => {
        // fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      },[character]);


  return (
    <div>
      <Card 
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={false}
            origin={character.origin}
         />
    </div>
  );
};

export default Detail;