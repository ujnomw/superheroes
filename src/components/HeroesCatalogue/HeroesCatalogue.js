import React from 'react'
import classes from './HeroesCatalogue.css'
import HeroIcon from '../HeroIcon/HeroIcon'

const HeroesCatalogue = props => {
    return (
        <div className={classes.HeroesCatalogue}>
            {
                props.heroes.map((hero,index) => {
                    return (
                        <HeroIcon
                            key={hero.name + index}
                            heroURL={hero.image}
                            name = {hero.name}
                            onHeroClick = {props.onHeroClick}
                            id = {index}
                        />
                    )
                })
            }
        </div>
    )
}

export default HeroesCatalogue;