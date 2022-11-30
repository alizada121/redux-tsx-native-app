import React from 'react'
import {View} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductScreen from './ProductScreen';
import SingleProduct from './SingleProduct';

function MainContainer() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
      </Stack.Navigator>
        
    </NavigationContainer>
  )
}

export default MainContainer