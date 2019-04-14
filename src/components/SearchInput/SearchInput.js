import React from 'react'
import classes from './SearchInput.css'

const state = {
    formRef: null
}
const resetForm = isReset => {
    if (isReset && state.formRef){
        console.log(state.formRef)
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
                    placeholder ='gecnf'
                    onChange={props.onChange}
                />
            </form>

        </div>
    )
}

export default SearchInput;