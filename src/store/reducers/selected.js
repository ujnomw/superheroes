import {ADD_NEW_HERO, CHANGE_SELECTED, INCREASE_HERO_COUNTER} from "../actions/actionTypes";
const initialState = {
    images: {}, // {id: image}
    counter: {}, // {id: counter}
    ids: []
}

export default function selectedReducer(state = initialState, action) {
    switch (action.type){
        case INCREASE_HERO_COUNTER:
            const counters = {...state.counter}
            counters[action.name]++
            return {
                ...state,
                counter: counters

            }
        case ADD_NEW_HERO:
            const images = {...state.images}
            const counter = {...state.counter}
            images[action.hero.name] = action.hero.image
            counter[action.hero.name] = 1
            return {
                images,
                counter,
                ids: state.ids.concat(action.hero.name)
            }
        default:
            return state
    }
}