import { createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import ReduxThunk from "redux-thunk";
import AsyncStorage from '@react-native-community/async-storage'


import rootReducer from './Reducers/RootReducer';

const saver = store => next => action => {
    let result = next(action);
    let stateToSave = store.getState();
        AsyncStorage.setItem("lawyer_Tickets", JSON.stringify(stateToSave));
        return result;

}


const middewares = [ReduxThunk, saver];


export const store = createStore(rootReducer, applyMiddleware(...middewares));

export const persistor = persistStore(store);

export default { store, persistStore};
