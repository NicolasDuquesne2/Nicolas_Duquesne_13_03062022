import { combineReducers, createStore } from 'redux'
import chevronReducer from './Chevron/reducerChevron'
import postIdReducer from './SignIn/reducer'

const rootReducer = combineReducers({
    chevron: chevronReducer,
    postIdReducer
})

const store = createStore(rootReducer)


export default store