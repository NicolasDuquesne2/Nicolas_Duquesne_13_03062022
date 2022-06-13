import { combineReducers, createStore } from 'redux'
import chevronReducer from './Chevron/reducerChevron'

const rootReducer = combineReducers({
    chevron: chevronReducer
})

const store = createStore(rootReducer)


export default store