import { createStore, applyMiddleware, compose } from "redux";
import { createLogicMiddleware } from 'redux-logic';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import Reactotron from './reactotron';
import rootReducer from "./reducers";
import logics from './logics';

const logicMiddleware = createLogicMiddleware(logics, {});


const enhancer = compose(
  applyMiddleware(logicMiddleware),
);

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['frontImage','backImage','name','amount']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = __DEV__ ? Reactotron.createStore(persistedReducer, enhancer) : createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);