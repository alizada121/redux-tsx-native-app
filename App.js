import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductScreen from './components/ProductScreen';
import SingleProduct from './components/SingleProduct';
import Cart from "./components/Cart"
import {Provider} from "react-redux"
import store from "./store"
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
      name="Products"
      component={ProductScreen}
      options={{ title: 'Welcome' }}
    />
    <Stack.Screen name="SingleProduct" component={SingleProduct} />
    <Stack.Screen name="Cart" component={Cart}/>
  </Stack.Navigator>
    
</NavigationContainer>
</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
