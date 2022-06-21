import { combineReducers, createStore, applyMiddleware } from 'redux'
import logInReducer from './Login/logInReducer'
import profileReducer from './Profile/profileReducer'
import ErrMessHtmlReducer from './FormErrMessHTML/ErrMesshtmlReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    ErrMessHtmlReducer,
    logInReducer,
    profileReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store