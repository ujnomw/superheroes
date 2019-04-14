import React from 'react'
import classes from './SelectedList'
import HeroIcon from '../HeroIcon/HeroIcon'

const SelectedList = props => {
    const renderHeros = () => {
        if (props.heroesToDisplay.length > 0){
            return props.heroesToDisplay.map((hero, index) => {
                return (
                    <HeroIcon
                        key={hero.name + index}
                        heroURL={hero.image}
                        name = {null}
                        onHeroClick = {props.onHeroClick}
                        id = {index}
                        count={hero.count}
                    />
                )
            })
        }
        else return null
    }
    return (
        <div className={classes.SelectedList}>
            {
                renderHeros()
            }
        </div>
    )
}

export default SelectedList;