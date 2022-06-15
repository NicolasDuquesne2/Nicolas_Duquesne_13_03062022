import { combineReducers, createStore, applyMiddleware } from 'redux'
import postIdReducer from './SignIn/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    postIdReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store