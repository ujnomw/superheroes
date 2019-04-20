import {DECREASE_HERO_COUNTER} from "./actionTypes";

export function onCloseClick(id) {
    return (dispatch, getState) => {
        const name = getState().selected.ids[id]
        dispatch(decreaseHeroCounter(name))
    }
}
export function decreaseHeroCounter(name) {
    return {
        type: DECREASE_HERO_COUNTER,
        name
    }
}