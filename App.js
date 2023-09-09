import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import TradingRegistration from './app/features/onboarding/ui/tradeRegistration';
import AuthNav from './app/features/splash/auth/authNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="auth"
          component={AuthNav}
          options={{
            headerShown: false
          }}
         />
         <Stack.Screen 
           name="tradingRegistration"
           component={TradingRegistration}
           options={{
              headerShown: false
           }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
