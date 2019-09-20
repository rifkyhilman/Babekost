import React from 'react'
import { View, Image, ImageBackground } from 'react-native'

class Splash extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
                <View  style={{flex: 1, justifyContent: 'center',alignItems: 'center',marginTop: 100}}>
                    <Image source={require('../image/bitmap3.png')} style={{width: 220, height: 52,}}/>
                </View>
                <ImageBackground source={require('../image/kota.png')} style={{width: '100%', height: 200}} />
            </View>
        )
    }
}

export default Splash
