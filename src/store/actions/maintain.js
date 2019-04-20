import {
    ADD_NEW_HERO, CHANGE_SELECTED, INCREASE_HERO_COUNTER, SEARCH_CHANGE, SWITCH_UNIVERSE
} from './actionTypes'

export function onSearchChange(event) {
    return (dispatch, getState) => {
        const state = getState().maintain
        const currentSet = state.isDC ? state.superheroes.dc : state.superheroes.marvel
        let newSet = []
        if (event.target.value !== ''){
            newSet = currentSet.filter(hero => {
                const name = hero.name.toLowerCase()
                const filter = event.target.value.toLowerCase()
                return name.includes(filter)
            })
        } else {
            newSet = currentSet
        }
        dispatch(changingSet(newSet))
    }
}
export function changingSet(newSet) {
    return {
        type: SEARCH_CHANGE,
        activeHeroes: newSet
    }
}
export function onHeroClick(id) {
    return (dispatch, getState) => {
        const hero = getState().maintain.activeHeroes[id]
        const ids = getState().selected.ids
        if (ids.includes(hero.name)){
            dispatch(increaseHeroCounter(hero.name))
        }
        else {
            dispatch(addNewHero(hero))
        }
    }
}
export function changeSelected(selectedHeroes) {
    return {
        type: CHANGE_SELECTED,
        selectedHeroes
    }
}
export function onSwitchUniverse() {
    return (dispatch, getState) => {
        const isDC = !getState().maintain.isDC
        const activeHeroes = isDC ? getState().maintain.superheroes.dc : getState().maintain.superheroes.marvel
        dispatch(universeSwitch(isDC, activeHeroes))
    }
}
export function universeSwitch(isDC, activeHeroes) {
    return {
        type: SWITCH_UNIVERSE,
        isDC,
        activeHeroes
    }
}
export function addNewHero(hero) {
    return {
        type: ADD_NEW_HERO,
        hero
    }
}
export function increaseHeroCounter(name) {
    return {
        type: INCREASE_HERO_COUNTER,
        name
    }
}