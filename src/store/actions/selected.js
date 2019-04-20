import {DECREASE_HERO_COUNTER, DELETE_SELECTED_HERO} from "./actionTypes";

export function onCloseClick(id, count ) {
    console.log(count)
    return (dispatch, getState) => {
        const name = getState().selected.ids[id]
        if (count !== 1) {
            dispatch(decreaseHeroCounter(name))
        } else {
            dispatch(deleteSelectedHero(id))
        }
    }
}
export function decreaseHeroCounter(name) {
    return {
        type: DECREASE_HERO_COUNTER,
        name
    }
}
export function deleteSelectedHero(id) {
    return {
        type: DELETE_SELECTED_HERO,
        id
    }
}