import {CHANGE_SELECTED} from "../actions/actionTypes";
const initialState = {
    heroes: []
}

export default function selectedReducer(state = initialState, action) {
    switch (action.type){
        case CHANGE_SELECTED:
            return{
                ...state,
                heroes: action.heroes
            }
        default:
            return state
    }
}