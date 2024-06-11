import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './assets/components/LoginScreen';
import HomeScreen from './assets/components/HomeScreen';
import CalculatorScreen from './assets/components/CalculatorScreen';
import DzikirScreen from './assets/components/DzikirScreen';
import GalleryScreen from './assets/components/GalleryScreen';
import ContactScreen from './assets/components/ContactScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Customer">
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="Dzikir" component={DzikirScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
