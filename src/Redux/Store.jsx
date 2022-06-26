import { combineReducers, createStore, applyMiddleware } from 'redux'
import logInReducer from './Login/logInReducer'
import profileReducer from './Profile/profileReducer'
import ErrMessHtmlReducer from './FormErrMessHTML/ErrMesshtmlReducer'
import RememberMeReducer from './RememberMe/RememberMeReducer'
import IdsReducer from './Ids/IdsReducer'
import SignUpReducer from './SignUp/signUpReducer'
import profileDatasReducer from './ProfileDatas/profileReducer'
import thunk from 'redux-thunk'
import ProfileInfosReducer from './ProfileInfos/profileInfosReducer'

const rootReducer = combineReducers({
    ErrMessHtmlReducer,
    RememberMeReducer,
    ProfileInfosReducer,
    IdsReducer,
    logInReducer,
    profileReducer,
    SignUpReducer,
    profileDatasReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store