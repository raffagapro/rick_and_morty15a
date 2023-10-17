import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from '../Actions/actionsTypes';
const initialState = {
    //estados globales
    myFavorites:[],
    allCharacters:[]
};

const rootReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD_FAV:
        return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
            allCharacters: [...state.allCharacters, action.payload], // Agregar al arreglo allCharacters
        }

        case REMOVE_FAV:
        return {
            ...state,
            myFavorites: action.payload
        }

        case ORDER:
            const sortedCharacters = state.myFavorite.slice().sort((a, b) => {
                if (action.payload === 'A') {
                  return a.id - b.id;
                } else {
                  return b.id - a.id;
                }
              });
            return {
            ...state,
            myFavorite: sortedCharacters
            }

        case FILTER:
            let { allCharacters } = state;
            return {
            ...state,
            myFavorite: allCharacters.filter(el => el.gender === action.payload)
            }
    
        default:
            return state;
    }
}

export default rootReducer;
