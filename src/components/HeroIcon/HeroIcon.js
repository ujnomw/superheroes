import React from 'react'
import classes from './HeroIcon.css'
import cross from '../../static/cross.png'

const HeroIcon = props => {
    // console.log(props.count && props.count > 1 )
    return (
        <div className={classes.HeroIcon }>
            { props.close
                ? <div className={classes.close}>
                    {/*<img className={classes.cross} src={cross} alt=""/>*/}
                </div>
                : null
            }
            <img
                src={props.heroURL}
                onClick={() => props.onHeroClick(props.id)}
                mous
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