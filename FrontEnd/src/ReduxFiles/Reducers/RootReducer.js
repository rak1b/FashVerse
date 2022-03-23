import { combineReducers } from 'redux';
import { CURRENT_USER } from '../Actions/CurrentUserAction';
import { CurrentUserReducer } from './CurrentUserReducer';
import { HeroReducer } from './HeroReducer';
import {  LoginStatusReducer } from './LoginReducer';
import { NewsReducer } from './NewsReducer';
import { ProfileReducer } from './ProfileReducer';

const RootReducer = combineReducers({
    HERO:HeroReducer,
    LOGIN:LoginStatusReducer,
    NEWS:NewsReducer,
    PROFILE:ProfileReducer,
    CURRENT_USER:CurrentUserReducer,
})
export default RootReducer