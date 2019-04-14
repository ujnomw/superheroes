import React from 'react'
import classes from './Menu.css'
import dclogo from '../../static/dc-logo.png'
import marvel from '../../static/marvel.png'

const Menu = props => {
    const marvelOnClickHandler = (isDC) => {
        return isDC ? () => props.onSwitch() : null
    }
    const dcOnClickHandler = (isDC) => {
        return !isDC ? () => props.onSwitch() : null
    }
    return (
        <div className={classes.Menu}>
            <div className={classes.dclogo}>
                <img  src={dclogo} onClick={dcOnClickHandler(props.isDC)} alt="dc-logo"/>
            </div>
            <div className={classes.marvel}>
                <img  src={marvel} onClick={marvelOnClickHandler(props.isDC)} alt="marvel"/>
            </div>

        </div>
    )
}

export default Menu;