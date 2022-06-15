import { combineReducers, createStore, applyMiddleware } from 'redux'
import postIdReducer from './Api/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    postIdReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store