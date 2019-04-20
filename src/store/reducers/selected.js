import {ADD_NEW_HERO, INCREASE_HERO_COUNTER, DECREASE_HERO_COUNTER} from "../actions/actionTypes";
const initialState = {
    // id = name
    images: {}, // {id: imageURL}
    counter: {}, // {id: counter}
    ids: [] // {id: name}
}

export default function selectedReducer(state = initialState, action) {
    let counter = null
    switch (action.type){
        case INCREASE_HERO_COUNTER:
            counter = {...state.counter}
            counter[action.name]++
            return {
                ...state,
                counter: counter

            }
        case ADD_NEW_HERO:
            const images = {...state.images}
            counter = {...state.counter}
            images[action.hero.name] = action.hero.image
            counter[action.hero.name] = 1
            return {
                images,
                counter,
                ids: state.ids.concat(action.hero.name)
            }
        case DECREASE_HERO_COUNTER:
            counter = {...state.counter}
            counter[action.name]--
            return {
                ...state,
                counter: counter
            }
        default:
            return state
    }
}