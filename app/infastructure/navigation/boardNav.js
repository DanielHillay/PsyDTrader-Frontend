import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TradingRegistration from '../../features/onboarding/ui/tradeRegistration';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function OnBoardingNavigation() {
   const Stack = createStackNavigator();
   return (
    <NavigationContainer>
       <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
               name="tradingRegistration"
               component={TradingRegistration}
               options={{
                  headerShown: false
               }}
            />
          </Stack.Navigator>
       </SafeAreaProvider>
    </NavigationContainer>
   )
}