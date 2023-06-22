import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';



import { Home } from '../pages/home/home';
import { Clients } from '../pages/clients/clients';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Clients" component={Clients} />
    </Drawer.Navigator>
  );
}
export const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>         
    );
}

