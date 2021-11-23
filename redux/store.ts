import { applyMiddleware, compose, createStore, Store } from 'redux';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { SHOW_REDUX_DEVTOOLS } from '../config';
import rootReducer from './reducer';
import sagas from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

function configureStore(): { store: Store; persistor: Persistor } {
  const sagaMiddlare = createSagaMiddleware();

  const rootPersistConfig = {
    key: 'root',
    storage: storage,
  };

  let middleware = applyMiddleware(sagaMiddlare);

  // config devtools
  if (SHOW_REDUX_DEVTOOLS === 'true') {
    const devToolsExtension =
      typeof window !== 'undefined'
        ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
        : compose;

    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
  const store = createStore(persistedReducer, middleware);
  const persistor = persistStore(store);

  // hot replacement
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(persistReducer(rootPersistConfig, nextRootReducer));
    });
  }

  sagaMiddlare.run(sagas);

  return {
    store,
    persistor,
  };
}

export default configureStore;