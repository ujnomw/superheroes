import React from 'react'
import classes from './SearchInput.css'
import icon from '../../static/icon-loupe.png'
const state = {
    formRef: null
}
const resetForm = isReset => {
    if (isReset && state.formRef){
        state.formRef.reset()
    }
}
const SearchInput = props => {
    resetForm(props.resetSearch)
    return (
        <div className={classes.SearchInput}>
            <form ref={el => state.formRef= el }>
                <input

                    type="text"
                    placeholder ='Имя героя'
                    onChange={props.onChange}
                />
                <img src={icon} alt="" className={classes.icon}/>
            </form>

        </div>
    )
}

export default SearchInput;