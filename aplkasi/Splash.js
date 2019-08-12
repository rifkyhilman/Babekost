import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'

class Splash extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#OOA699', justifyContent: 'space-between', alignItems: 'center',}}>
                <View  style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                <Image style={{width: 40, height: 40, paddingBottom: 30, borderWidth: 2, borderColor: '#00A699', borderRadius: 50}} source={require('../image/man.png')} />
                <Text style={{fontSize: 30, color: '#00A699', fontStyle: 'italic' }}>
                    BabeKost.com
                </Text>
                </View>
                <ImageBackground source={require('../image/kota.png')} style={{width: '100%', height: 150}} />
            </View>
        )
    }
}

export default Splash
