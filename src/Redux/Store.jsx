import { combineReducers, createStore, applyMiddleware } from 'redux'
import chevronReducer from './Chevron/reducerChevron'
import postIdReducer from './SignIn/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    chevron: chevronReducer,
    postIdReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store