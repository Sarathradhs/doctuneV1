import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigator from './app/routes/StackNavigation'
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App() {
  return <Navigator/>;
}


