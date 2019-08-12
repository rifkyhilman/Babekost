import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import React from 'react'
import { Image } from 'react-native'
import Profile from './Profile'
import Home from './Home'


const menu = createBottomTabNavigator({
    Home: {
        screen: Home,
    },
    Profile: {
        screen: Profile,
    }
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: 'red',
        style: {
            backgroundColor: 'green'
        }
    },
    
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === 'Home') {
            return (
              <Image
                source={ require('../image/home.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else if (routeName === 'Profile') {
            return (
              <Image
                source={ require('../image/profile.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else {
            return (
              <Image
              source={ require('../image/home.png') }
                style={{ width: 20, height: 20 }} />
            );
          }
        },
      }),
})


export default createAppContainer(menu)