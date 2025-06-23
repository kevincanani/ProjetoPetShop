import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Login from './Screens/Login';
import Cadastro from './Screens/Cadastro';
import Home from './Screens/Home';
import Veterinario from './Screens/Veterinario';
import BanhoTosa from './Screens/BanhoTosa';
import Reagendar from './Screens/Reagendar';
import Visualizar from './Screens/Visualizar';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator screenOptions={{
      headerRight: (props)  => <Image style={{width: 50, height:50}} source={require('./assets/logo_petshop.png')}/>,
      headerStyle:{backgroundColor: '#06f27c'},
      headerTintColor: 'white',
      tabBarActiveBackgroundColor: '#06f27c',
      tabBarInactiveBackgroundColor: '#06f27c',
      tabBarActiveTintColor: 'black'
    }}>
      <Tab.Screen name='Home' component={Home}
      options={{
        tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" />
      }}/>
      <Tab.Screen name='Veterinário' component={Veterinario}
      options={{
        tabBarIcon: () => <FontAwesome6 name="user-doctor" size={24} color="black" />
      }}/>
      <Tab.Screen name='Banho e Tosa' component={BanhoTosa}
      options={{
        tabBarIcon: () => <FontAwesome6 name="bath" size={24} color="black" />
      }}/>
      <Tab.Screen name='Reagendar' component={Reagendar}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="notebook-edit-outline" size={24} color="black" />
      }}/>
      <Tab.Screen name='Visualizar' component={Visualizar}
      options={{
        tabBarIcon: () => <FontAwesome6 name="list-alt" size={24} color="black" />
      }}/>
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerRight: (props)  => <Image style={{width: 50, height:50}} source={require('./assets/logo_petshop.png')}/>,
          headerStyle:{backgroundColor: '#06f27c'},
          headerTintColor: 'white',
        }}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Cadastro' component={Cadastro}/>
          <Stack.Screen options={{headerShown:false}} name='Veterinario' component={BottomTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}