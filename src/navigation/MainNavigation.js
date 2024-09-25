import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const StackNavigator = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export const MainNavigation = props => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
