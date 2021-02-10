import { createStore, applyMiddleware, compose, Store } from "redux";
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import createRootReducer from "./reducers";
import rootSaga from "./reducers/rootSaga";

// TYPES
import { ReducerTypes as GlobalReducerTypes } from './reducers/global/types'

export interface ApplicationState {
  globalState: GlobalReducerTypes
}

// PERSISTENCE
const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, createRootReducer())

// SAGA
const sagaMiddleware = createSagaMiddleware()

// STORE

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

const Persistor = persistStore(store)

export { store, Persistor };
