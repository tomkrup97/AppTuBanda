import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home.js';
import BandDetail from './src/screens/BandDetail.js'
import BandsList from './src/screens/BandsList.js'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './src/navigation/MainNavigator'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <MainNavigator></MainNavigator>
  );
}

export default App;


