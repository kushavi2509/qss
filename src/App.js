import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native';
import Home from './screens/home/Home';
import Profile from './screens/Profile';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator(); //contains HOME and Profile
const RootStack = createStackNavigator(); //contains Drawer

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeStackScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="App" component={DrawerScreen} />
  </RootStack.Navigator>
);

export default () => {
  return (
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </SafeAreaView>
  );
};
