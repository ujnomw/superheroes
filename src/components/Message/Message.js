import React from 'react'
import classes from './Message.css'

const Message = props => {
    return (
        <div className={classes.Message}>
            {props.text}
        </div>
    )
}

export default Message;