import React from 'react'
import classes from './SelectedList.css'
import HeroIcon from '../HeroIcon/HeroIcon'

const SelectedList = props => {

    const renderHeros = () => {
        if (props.heroesToDisplay.length){
            return props.heroesToDisplay.map((hero, index) => {
                return (
                    <HeroIcon
                        key={hero.name + index}
                        heroURL={hero.image}
                        name = {null}
                        onHeroClick = {null}
                        id = {index}
                        count={hero.count}
                        close = {true}
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