import React from 'react'
import { View,Text,Image, StatusBar } from 'react-native';

class Home extends React.Component {
 
  // constructor () {
  //   super(); 
  //   this.state={
  //     Images:[
  //      'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.jotravelguide.com%2Fimages%2Fbandung%2Fmonument_perjuangan_rakyat_jabar.jpg&imgrefurl=http%3A%2F%2Fwww.jotravelguide.com%2Fbandung%2Fmonumen_dan_tugu_di_bandung.php&docid=STuz5uFw6W_zwM&tbnid=yF2PLPGRopIVcM%3A&vet=10ahUKEwjH7tTe5_zjAhVhILcAHYxOAxEQMwhVKAwwDA..i&w=500&h=375&safe=strict&bih=588&biw=1313&q=tugu%20kota%20bandung&ved=0ahUKEwjH7tTe5_zjAhVhILcAHYxOAxEQMwhVKAwwDA&iact=mrc&uact=8',
  //      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fawsimages.detik.net.id%2Fcustomthumb%2F2015%2F04%2F20%2F486%2F154437_img_20150420_115906.jpg%3Fw%3D780%26q%3D90&imgrefurl=https%3A%2F%2Fnews.detik.com%2Fberita-jawa-barat%2F2892524%2Fini-tugu-global-ikon-baru-bandung-yang-memuat-orasi-heroik-bung-karno&docid=abCoG1Ylu8otRM&tbnid=jldC7kSmVgffGM%3A&vet=10ahUKEwjH7tTe5_zjAhVhILcAHYxOAxEQMwhYKA8wDw..i&w=780&h=585&safe=strict&bih=588&biw=1313&q=tugu%20kota%20bandung&ved=0ahUKEwjH7tTe5_zjAhVhILcAHYxOAxEQMwhYKA8wDw&iact=mrc&uact=8'
  //     ]
  //   }
  // }
 
  render() {
    return (
      <View style={{backgroundColor:'#ADD8E6'}}>
       <StatusBar backgroundColor="#ADD8E6" />
       <Text style = {{padding: 10, fontSize: 20, color: 'black', textAlign:'center'}} >
        BabeKost.com
       </Text>
      </View>
    )
  }
}

export default Home