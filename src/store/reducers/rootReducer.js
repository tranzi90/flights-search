import {combineReducers} from 'redux'
import searchReducer from './reducers'

export default combineReducers({
  search: searchReducer
})
