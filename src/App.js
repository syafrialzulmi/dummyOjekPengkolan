/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Router from './config/router';
import { Provider } from 'react-redux';
import { store } from './config/redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>      
        <Router />
      </NavigationContainer>
    </Provider>
    
  );
};

export default App;
