import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import Favorite from "./src/screens/Favoris";
import Search from "./src/screens/Search";
import Details from "./src/screens/Details";
import {Avatar} from "react-native-paper"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux'
import Store from "./src/store/Store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <Provider store={Store}>
          <NavigationContainer>
              <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel : false }}>
                  <Tab.Screen  options={{
                      tabBarIcon: ({ color, size }) => (
                          <Avatar.Icon icon="glass-cocktail" size={35} style={{ backgroundColor:'transparent'}} color='red'/>
                      ),
                      //tabBarBadge: 3,
                  }}
                   name="Cocktails" component={Home}/>
                  <Tab.Screen
                      options={{
                          tabBarIcon: ({ color, size }) => (
                              <Avatar.Icon icon="star" size={35} style={{ backgroundColor:'transparent'}} color='red'/>
                          ),
                          //tabBarBadge: 3,
                      }}
                      name="Favoris" component={Favorite}/>
                  <Tab.Screen
                      options={{
                          tabBarIcon: ({ color, size }) => (
                              <Avatar.Icon icon="search-web" size={35} style={{ backgroundColor:'transparent'}} color='red'/>
                          ),
                          //tabBarBadge: 3,
                      }}
                      name="Search" component={Search}/>
              </Tab.Navigator>
          </NavigationContainer>
      </Provider>
  );
}
