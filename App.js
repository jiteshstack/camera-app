import React, { Component } from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./src/config";

// Use this as the root component
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
