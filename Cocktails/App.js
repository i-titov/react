import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/pages/Home";
import Details from "./src/pages/Details";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function tabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen  name="All cocktails" component={Home}/>
        </Tab.Navigator>
    );
}
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="All cocktails" component={tabsNavigator} />
              <Stack.Screen name="Details" component={Details}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}
