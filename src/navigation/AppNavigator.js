
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import PreparingOrderScreen from '../screens/PreparingOrderScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import UserInfo from '../screens/UserInfo';
import UpdateAddressScreen from '../screens/UpdateAddressScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigor() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignupScreen} />
        <Stack.Screen name="AllProducts" options={{headerShown: false}} component={ProductScreen}/>
        <Stack.Screen name="Cart" options={{presentation: 'modal' }} component={CartScreen}/>
        <Stack.Screen name="PreparingOrder" options={{ presentation: 'fullScreenModal', headerShown: false }} component={PreparingOrderScreen}/>
        <Stack.Screen name="Delivery"  options={{ presentation: 'fullScreenModal', headerShown: false }}component={DeliveryScreen}/>
        <Stack.Screen name="UserInfo" options={{headerShown: false}} component={UserInfo}/>
        <Stack.Screen name="UpdateAddress" options={{headerShown: false}} component={UpdateAddressScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}