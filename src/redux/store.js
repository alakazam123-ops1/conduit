import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = composeWithDevTools(
  applyMiddleware(thunk),
);


export default () => {
  const store = createStore(persistedReducer, composedEnhancers);
  return { store, persistor: persistStore(store) };
};

