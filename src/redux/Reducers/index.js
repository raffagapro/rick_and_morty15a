import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from '../Actions/actionsTypes';
const initialState = {
    //estados globales
    myFavorites:[]
};

const rootReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD_FAV:
        return {
            ...state,
            // allCharacters: [...state.allCharacters, action.payload], // Agregar al arreglo allCharacters
            myFavorites: [...state.myFavorites, action.payload],
        }

        case REMOVE_FAV:
        return {
            ...state,
            myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
        }

        case ORDER:
            //alguna logica increible    
                break;

        case FILTER:
            //alguna logica increible    
                break;
    
        default:
            return state;
    }
}

export default rootReducer;
