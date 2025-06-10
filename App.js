import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Veterinario from './Screens/Veterinario';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// function BottomTabs() {
//   const Tab = createBottomTabNavigator();
//   return(
//     <Tab.Navigator screenOptions={{
//       headerStyle:{backgroundColor: '#e7b98e'},
//       headerTintColor: 'white',
//       tabBarActiveBackgroundColor: '#e2ab78',
//       tabBarInactiveBackgroundColor: '#e7b98e',
//       tabBarActiveTintColor: 'black'
//     }}>
//       <Tab.Screen name='Login' component={Login}/>
//       <Tab.Screen name='Home' component={Home}/>
//     </Tab.Navigator>
//   )
// }

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen options={{headerShown:false}} name='Home' component={BottomTabs}/>
        </Stack.Navigator>
      </NavigationContainer> */}

        <Veterinario/>

    </View>
    
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
