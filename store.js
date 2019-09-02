import { createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import ReduxThunk from "redux-thunk";

import rootReducer from './Reducers/RootReducer';

const middewares = [ReduxThunk];


export const store = createStore(rootReducer, applyMiddleware(...middewares));

export const persistor = persistStore(store);

export default { store, persistStore};
