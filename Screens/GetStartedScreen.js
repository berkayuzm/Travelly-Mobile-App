import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
export default function GetStartedScreen({navigation}) {
  useEffect(()=>{
   fetchAsyncStorage();
  },[])
  const fetchAsyncStorage = async()=>{
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      console.log(keys.length)
      if(keys.length===0){
        const favorites=[]
        await AsyncStorage.setItem("favorites",JSON.stringify(favorites))
        console.log("favori dizisi oluşturuldu")
      }
      else{
        console.log("favori dizisi zaten var!")
        const favlist=await AsyncStorage.getItem("favorites")
        console.log("favorilerim==>"+favlist)
      }
    } catch (error) {
      
    }
  }
  const goToHomeScreen =()=>{
    navigation.navigate("Home_Screen")
   }
  return (
    <View style={styles.container}>
     <StatusBar  backgroundColor={'transparent'} translucent/>
      <ImageBackground source={require("../assets/background.png")} resizeMode="cover" style={styles.image}>
        <View style={styles.welcomecontainer}>
          <Text style={styles.welcomemaintext}>
            Discover best places in Turkey !
          </Text>
          <Text style={styles.welcomesubtext}>
            Emotion that can be carried with us all over the world
          </Text>
          <TouchableHighlight style={styles.startbutton} onPress={goToHomeScreen}>
            <Text style={styles.starttext}>Get Started</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width:"100%"
  },
  welcomecontainer:{
    flex:0.4,
    backgroundColor:"white",
    width:"97%",
    borderTopRightRadius:32,
    borderTopLeftRadius:32,
    padding:30,
  },
  welcomemaintext:{
    fontSize:40,
    fontWeight:"bold",
    marginBottom:8
  },
  welcomesubtext:{
    fontSize:17,
    fontWeight:"bold",
    marginBottom:95
    
  },
  startbutton:{
    backgroundColor:"#000",
    width:"75%",
    alignSelf:"center",
    padding:13,
    borderRadius:15
  },
  starttext:{
    color:"white",
    textAlign:'center',
    fontSize:20,
    fontWeight:"bold"
  }
});
