import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import MainNavigator from './src/navigation/MainNavigator'
import store from './src/app/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

export default App;
