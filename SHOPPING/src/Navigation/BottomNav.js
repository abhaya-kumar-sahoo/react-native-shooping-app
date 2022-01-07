import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../Screen/Home/HomeScreen';
import Icon from 'react-native-vector-icons/dist/Feather';
import {Profile} from '../Screen/Profile/Profile'
import {Favorites} from '../Screen/Favorites/Favorites'
import {ShoppingCart} from '../Screen/ShoppingCart/ShoppingCart'
const Tab = createBottomTabNavigator();


export const BottomNav = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}} >
        <Tab.Screen options={{tabBarIcon: (tabInfo) => {
        return (
          <Icon
            name="home"
            size={30}
            color={tabInfo.focused ? "#3f3" : "#000"}
          />
        );
      },title:"Home" }} name="Home" component={HomeScreen} />

        <Tab.Screen options={{tabBarIcon: (tabInfo) => {
        return (
          <Icon
            name="heart"
            size={30}
            color={tabInfo.focused ? "#3f3" : "#000"}
          />
        );
      },title:"Favorite" }} name="FavoritesScreen" component={Favorites} />

        <Tab.Screen options={{tabBarIcon: (tabInfo) => {
        return (
          <Icon
            name="shopping-cart"
            size={30}
            color={tabInfo.focused ? "#3f3" : "#000"}
          />
        );
      },title:"Cart" }} name="ShoppingCartScreen" component={ShoppingCart} />
        <Tab.Screen options={{tabBarIcon: (tabInfo) => {
        return (
          <Icon
            name="user"
            size={30}
            color={tabInfo.focused ? "#3f3" : "#000"}
          />
        );
      },title:"Account" }} name="ProfileScreen" component={Profile} />
        {/* <Tab.Screen name="Settings" component={} /> */}

      </Tab.Navigator>
    )
}




