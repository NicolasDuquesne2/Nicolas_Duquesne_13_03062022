import { combineReducers, createStore, applyMiddleware } from 'redux'
import logInReducer from './Login/logInReducer'
import profileReducer from './Login/profileReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    logInReducer,
    profileReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store