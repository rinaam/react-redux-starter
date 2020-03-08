import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StoreContext } from 'redux-react-hook';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoutes from './Routes/routes';
import { store, persistor } from './Store/Store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StoreContext.Provider value={store}>
        <App />
        <AppRoutes />
      </StoreContext.Provider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
