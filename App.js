/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
 
  StyleSheet,
 
} from 'react-native';
import { Provider } from 'react-redux';
import AuthScreen from './src/Navigation/AuthScreen';
import { store } from './src/redux/store';





function App(){
  return (
    <Provider store={store}>
      <AuthScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
