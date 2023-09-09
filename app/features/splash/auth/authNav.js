import { React } from 'react';
import  SignInScreen from './signInScreen';
import SignUpScreen from './signUpScreen';
import AccessSplashScreen from '../screens/accessScreen';
import {  createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
           name="access" 
           component={AccessSplashScreen}
           options={{ headerShown: false }}
         />  
         <Stack.Screen 
           name="signin" 
           component={SignInScreen}
           options={{ headerShown: false }}
         />
         <Stack.Screen 
           name="signup"
           component={SignUpScreen}
           options={{ headerShown: false }}
         />
    </Stack.Navigator>
  );
}