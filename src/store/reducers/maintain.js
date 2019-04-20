import data from '../../static/superheroes.json'
import { SEARCH_CHANGE, SWITCH_UNIVERSE} from "../actions/actionTypes";
const initialState = {
    superheroes: data,
    activeHeroes: data.dc,
    isDC: true,
    resetSearch: true,
    selectedHeroes: []
}

export default function maintainReducer(state = initialState, action){
    switch (action.type){
        case SEARCH_CHANGE:
            return {
                ...state,
                activeHeroes: action.activeHeroes,
                resetSearch: false
            }
        case SWITCH_UNIVERSE:{
            return {
                ...state,
                isDC: action.isDC,
                activeHeroes: action.activeHeroes,
                resetSearch: true
            }
        }
        default:
            return state
    }
}
