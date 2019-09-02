import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import MoviesReducer from "./MoviesReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
}

const rootReducer =  combineReducers({
    Auth: LoginReducer,
    Movies: MoviesReducer
})


export default persistReducer(persistConfig, rootReducer)