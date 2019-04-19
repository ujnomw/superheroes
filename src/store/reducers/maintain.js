import data from '../../static/superheroes.json'
import {CHANGE_SELECTED, SEARCH_CHANGE, SWITCH_UNIVERSE} from "../actions/actionTypes";
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
        // case CHANGE_SELECTED:
        //     return{
        //         ...state,
        //         selectedHeroes: action.selectedHeroes
        //     }
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
