import {CHANGE_SELECTED, SEARCH_CHANGE, SWITCH_UNIVERSE, TEST_ACTION} from './actionTypes'
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
        let selectedHeros = getState().selected.heroes
        const newHero = {
            ...getState().maintain.activeHeroes[id],
            count: 1
        }
        let isNewAdded = true
        selectedHeros.forEach((hero, index) => {
            if (hero.name === newHero.name){
                selectedHeros[index].count += 1
                isNewAdded = false
            }
        })
        selectedHeros = isNewAdded ? selectedHeros.concat(newHero) : selectedHeros
        dispatch(changeSelected(selectedHeros))
    }
}
export function changeSelected(heroes) {
    return {
        type: CHANGE_SELECTED,
        heroes
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