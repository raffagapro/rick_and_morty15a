// import { connect } from "react-redux"
import  Card  from "../Card/Card"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { orderCards, filterCards } from '../../redux/Actions';

export default function Favorites (){
    let favs = useSelector(state => state.myFavorites);
    let dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        // setAux(!aux);
    };

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
        // setAux(!aux);
    };

    useEffect(() => {}, [favs]);

    return(
        <div>
            <div>
                <select name="order" onChange={handleOrder} >
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                </select>

                <select name="gender" onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {favs?.map(fav => (
                <Card
                    name={fav.name}
                    id={fav.id}
                    key={fav.id}
                    gender={fav.gender}
                    image={fav.image}
                />
            ))}
        </div>
    )
}