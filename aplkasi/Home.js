import React from 'react';
import { 
  View, Text, StatusBar, 
  Image, ScrollView, Alert, TextInput, 
  TouchableHighlight, ImageBackground 
} from 'react-native';
import axios from 'axios'
import ImageSlider from 'react-native-image-slider'

class Home extends React.Component {

  state = {
    kota: [],
    images: [
      require('../ImageSlider/posterA.jpg'),
      require('../ImageSlider/posterB.jpg'),
      require('../ImageSlider/posterC.jpg'),
      require('../ImageSlider/posterD.jpg'),
    ]
  }

  componentDidMount = () => {
    axios({
      url: 'https://my-json-server.typicode.com/rifkyhillman26/babeserver/kota',
      method: 'get'
    })
    .then( response => {
      console.log(response.data)
      this.setState({
        kota: response.data
      })
    })
  }

  ditekan = () => {
    return Alert.alert(`LOGIN dulu yaa..`);
  }


  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <StatusBar background= '#424242' />
        <View style={{ flexDirection: 'row' , backgroundColor: '#424242', justifyContent: 'space-between', padding: 10 }}>
          <Image style={{ width: 25, height: 25 }} source={require('../image/menu.png')} />
          <Image style={{  width: 138, height: 33, alignSelf: 'center'}} source={require('../image/bitmap.png')} />
          <Image source={require('../image/chat.png')} />
        </View>
        <ScrollView style={{marginBottom: 50}}>
        <View style={{ backgroundColor: 'white', }}>
          <Text style={{ marginLeft: 20, marginTop: 20 }}>
            Hai,Rifki
          </Text>
          <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
            Mau cari Kost dimana ?
          </Text>
          <TextInput style={{ backgroundColor: '#DCDCDC', borderRadius: 10, width: 320, marginLeft: 20, marginBottom: 15, paddingLeft: 15,}} placeholder='massukan alamat' />
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 20, }}>
            Iklan
          </Text>
          <View style={{flexDirection: 'row', height: 200, paddingLeft: 20, paddingRight: 20}}>
          <ImageSlider 
          images={this.state.images}
          autoPlayWithInterval={3000}
          />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center',}}>
            <Text>
              Tertarik mengiklankan kosmu ?
            </Text>
            <TouchableHighlight onPress={this.ditekan}>
              <View style={{backgroundColor: '#FF8C00',width: 80, height: 30, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 10}}>
                  Pasang iklan 
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 18, margin: 20,}}>
              kota Populer
            </Text>
          </View>
          <ScrollView horizontal={true} style={{margin: 10}}>
           {
             this.state.kota.map( (item, index) => {
               return (
                <ImageBackground key={index} source={{uri: item.image}} 
                style={{ flex: 1, margin: 5, height: 150, width: 100, justifyContent: 'flex-end', alignItems:'center',}}>
                  <Text style={{color: 'white', marginBottom: 10}}> {item.name} </Text>
                </ImageBackground>
               )
             } )
           }
          </ScrollView>
        </View>
       </ScrollView>
      </View>
    )
  }
}

export default Home