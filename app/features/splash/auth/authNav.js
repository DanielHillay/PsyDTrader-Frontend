import { React } from 'react';
import  SignInScreen from './signInScreen';
import SignUpScreen from './signUpScreen';
import AccessSplashScreen from '../screens/accessOnboard';
import TradingRegistration from '../../onboarding/ui/tradeRegister';
import Welcome from '../../onboarding/ui/welcomeScreen';
import DashboardScreen from '../../onboarding/screens/dashboardScreen';
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
         <Stack.Screen 
           name="tradingRegistration"
           component={TradingRegistration}
           options={{
              headerShown: false
           }}
            />
          <Stack.Screen 
           name="welcome"
           component={Welcome}
           options={{
              headerShown: false
           }}
            />
            <Stack.Screen 
              name="dashboard"
              component={DashboardScreen}
             options={{ headerShown: false}}
           />
    </Stack.Navigator>
  );
}