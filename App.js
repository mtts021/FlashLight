import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake'

const App=()=>{  
  const [toggle, setToggle]= useState(false);
  const handleChangeToggle = ()=>setToggle(oldToggle => !oldToggle);

  useEffect(()=>{
    // Liga flash do celular
    Torch.switchState(toggle);
   },[toggle]);

   useEffect(()=>{
    /**
     * Quando o celular for chacoalhado,mudaremos o toggle
    */
    const subscription = RNShake.addListener(()=>{
     setToggle(oldToggle => !oldToggle);
   });
   // Essa func vai ser chamada quandoocomponets
  // For ser desmontado
   return ()=>subscription.remove();
 },[]);

 return(
    <View style ={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress= {handleChangeToggle}>
        <Image style = {toggle ? styles.lightingOn : styles.lightingOff}
                source={toggle 
                  ? require('./assets/icons/eco-light.png') 
                  :require('./assets/icons/eco-light-off.png')
                }/>

        <Image style = {styles.dioLogo}
                source={toggle 
                  ? require('./assets/icons/logo-dio.png') 
                  :require('./assets/icons/logo-dio-white.png')
                }/> 
      </TouchableOpacity>
    </View>
 )
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
   backgroundColor:'#2a2a2a',
    alignItems:'center',
   justifyContent:'center',
 },
  containerLight:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
   justifyContent:'center',
 },
 lightingOn:{
    alignSelf: 'center',
    width: 150,
    height: 150,
    resizeMode: 'contain',

 },

 lightingOff:{
  alignSelf: 'center',
    width: 150,
    height: 150,
    resizeMode: 'contain',
    tintColor: 'white'
},
  dioLogo:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
})
