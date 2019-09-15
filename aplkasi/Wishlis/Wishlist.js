import React from 'react'
import { View, Text } from 'react-native'

class Wishlist extends React.Component {
  render() {
    return (
      <View>
      <View style={{backgroundColor: '#00b5ec',padding: 15}}>
        <Text style={{fontSize: 20}}>
          Wishlist
        </Text>
      </View>
      <View style={{backgroundColor: '#00b5ec', flexDirection: 'row', justifyContent: 'space-between',paddingLeft: 50, paddingRight: 50, paddingBottom: 10}}>
        <Text style={{fontSize: 15, flexDirection: 'row',}}>
          kosan
        </Text>
        <Text>
          History
        </Text>
      </View>
      <View>
        <Text>
          Not Found
        </Text>
      </View>
      </View>
    )
  }
}
 

export default Wishlist