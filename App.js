import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,LogBox } from 'react-native';
import GetStartedScreen from './Screens/GetStartedScreen';
import HomeScreen, { TabNavigation } from './Screens/HomeScreen';
import PlaceDetails from './Screens/PlaceDetails';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const Stack = createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name='GetStartedScreen'
      component={GetStartedScreen}
      options={{
        header:()=>null
      }}
      />
      <Stack.Screen
      name='Home_Screen'
      component={TabNavigation}
      options={{
        header:()=>null
      }}
      />
       <Stack.Screen
      name='Detail_Screen'
      component={PlaceDetails}
      options={{
        header:()=>null
      }}
      />


    </Stack.Navigator>
   </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
