import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import React from 'react'
import { Image } from 'react-native'
import Profile from './Profile'
import Kost from './Kost'
import Wishlist from './Wishlis/Wishlist'
import Chat from './Chat'


const menu = createBottomTabNavigator({
    Explore: {
        screen: Kost,
    },
    Wishlist: {
        screen: Wishlist,
    }, 
    Chat: {
      screen: Chat,
    },
    Profile: {
        screen: Profile,
    }
}, {
    initialRouteName: 'Explore',
    tabBarOptions: {
        activeTintColor: 'yellow',
        style: {
            backgroundColor: '#424242'
        }
    },
    
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === 'Explore') {
            return (
              <Image
                source={ require('../image/search.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else if (routeName === 'Wishlist') {
            return (
              <Image
                source={ require('../image/like.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else if (routeName === 'Chat') {
            return (
              <Image
                source={ require('../image/chat.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else if (routeName === 'Profile') {
            return (
              <Image
                source={ require('../image/user.png') }
                style={{ width: 20, height: 20, }} />
            );
          } 
           else {
            return (
              <Image
              source={ require('../image/search.png') }
                style={{ width: 20, height: 20 }} />
            );
          }
        },
      }),
})


export default createAppContainer(menu)