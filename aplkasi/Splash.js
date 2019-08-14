import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'

class Splash extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#00b5ec', justifyContent: 'space-between', alignItems: 'center', paddingBottom: null }}>
                <View  style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                    <Image style={{width: 70, height: 70, borderWidth: 3, borderColor: '#000000', borderRadius: 50, marginBottom: 10}} source={require('../image/man.png')} />
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: '#000000', fontStyle: 'italic' }}>
                        BabeKost.com
                    </Text>
                </View>
                <ImageBackground source={require('../image/kota.png')} style={{width: '100%', height: 200}} />
            </View>
        )
    }
}

export default Splash
