import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
import React from 'react'
import { Image } from 'react-native'
import Apartemen from './Apartemen';
import Kost from './Kost';
import Pekerjaan from './Pekerjaan';



const menu = createMaterialTopTabNavigator({
    Kost: {
        screen: Kost,
    },
    Apartemen: {
        screen: Apartemen,
    }, 
    Pekerjaan: {
      screen: Pekerjaan,
    }
}, {
    initialRouteName: 'Kost',
    tabBarOptions: {
        activeTintColor: 'black',
        style: {
            borderBottomColor: 'blue',
            backgroundColor: 'white'
        }
    },
    
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === 'Kost') {
            return (
              <Image
                source={ require('../image/search.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else if (routeName === 'Apartemen') {
            return (
              <Image
                source={ require('../image/like.png') }
                style={{ width: 20, height: 20, }} />
            );
          } else if (routeName === 'Pekerjaan') {
            return (
              <Image
                source={ require('../image/chat.png') }
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