import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
import React from 'react'
import { Image } from 'react-native'
import Favorite from './Favorite'
import Dilihat from './Dilihat'


const menu = createMaterialTopTabNavigator({
    Favorite: {
        screen: Favorite,
    },
    Dilihat: {
      screen: Dilihat,
    },
}, {
    initialRouteName: 'Favorite',
    tabBarOptions: {
        activeTintColor: 'white',
        style: {
            backgroundColor: '#424242'
        }
    },
    
  defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === 'Favorite') {
            return (
              <Image
                source={ require('../image/search.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else if (routeName === 'Dilihat') {
            return (
              <Image
                source={ require('../image/chat.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else {
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