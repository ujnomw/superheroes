import React from 'react'
import classes from './HeroIcon.css'

const HeroIcon = props => {
    return (
        <div className={classes.HeroIcon + ' ' +classes.wrapper}>
            <img
                src={props.heroURL}
                onClick={() => props.onHeroClick(props.id)}
            />
            {props.count && props.count > 1 ? <div className={classes.counter}>{props.count}</div> : null}
            {props.name ? <span>{props.name}</span> : null}

        </div>
    )
}

export default HeroIcon;