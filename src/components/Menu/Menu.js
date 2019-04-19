import React from 'react'
import classes from './Menu.css'
import dclogo from '../../static/dc-logo.png'
import marvel from '../../static/marvel.png'
import {NavLink} from 'react-router-dom'
const Menu = props => {
    const marvelOnClickHandler = (isDC) => {
        return isDC ? () => props.onSwitch() : null
    }
    const dcOnClickHandler = (isDC) => {
        return !isDC ? () => props.onSwitch() : null
    }
    const dcClasses = [classes.dclogo]
    const marvelClasses = [classes.marvel]
    if (!props.isDC){
        dcClasses.push(classes.inactive)
    } else {
        marvelClasses.push(classes.inactive)
    }
    return (
        <div className={classes.Menu}>
            <NavLink
                to="/dc"
            >
                <div className={dcClasses.join(' ')}>
                    <img  src={dclogo} onClick={dcOnClickHandler(props.isDC)} alt="dc-logo"/>
                </div>
            </NavLink>
            <NavLink
                to="/marvel"
            >
                <div className={marvelClasses.join(' ')}>
                    <img  src={marvel} onClick={marvelOnClickHandler(props.isDC)} alt="marvel"/>
                </div>
            </NavLink>


        </div>
    )
}

export default Menu;