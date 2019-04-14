import {combineReducers} from 'redux'
import selectedReducer from './selected'
import maintainReducer from './maintain'

export default combineReducers({
    selected: selectedReducer,
    maintain: maintainReducer
})