import React from 'react'
import classes from './HeroIcon.css'

const HeroIcon = props => {
    return (
        <div className={classes.HeroIcon }>
            { props.close
                ? <div
                    className={classes.close}
                    onClick={() => props.onCloseClick(props.id, props.count)}
                />

                : null
            }
            <img
                src={props.heroURL}
                onClick={() => props.onHeroClick(props.id)}
                alt={props.name}
            />
            {props.count && props.count > 1
                ? <div className={classes.counter}>
                    <span>{props.count}</span>
                </div>
                : null
            }
            {props.name ? <span>{props.name}</span> : null}

        </div>
    )
}

export default HeroIcon;