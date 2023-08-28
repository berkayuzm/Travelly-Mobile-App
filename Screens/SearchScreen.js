import { View, Text,SafeAreaView,StyleSheet,TextInput,ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

import GlobalStyles from '../GlobalStyles'
const SearchScreen = ({navigation}) => {
  const [value,setValue]=useState("");
  const submitInput=()=>{
    if(value.length<=1){
      ToastAndroid.showWithGravityAndOffset(
        'En az 2 karakter girmelisin!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
        );
      }
      else{
        let obj={
          value:value
        }
        navigation.navigate("Result_Search",obj)
        
      }
      setValue("")
  }

  return (
    <SafeAreaView  style={GlobalStyles.droidSafeArea}>
      <View style={styles.container}>
      <Text style={styles.mainText}>Gezilecek bir yer ara..</Text>
      <View style={styles.searcharea}>
            <View style={styles.searchflex}>
              <Ionicons
                name="search-outline"
                size={28}
                
                color="#858585"
                style={{ marginRight: 5 }}
              />
              <TextInput
                style={styles.input}
                placeholder={"bir arama yap..."}
                onSubmitEditing={submitInput}
                value={value}
                onChangeText={(text)=>setValue(text)}

              />
            </View>
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainText:{
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  container:{
    padding:20
  },
  searcharea: {
    height: 50,
    padding: 10,
    width: "100%",
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  searchflex: {
    flex: 1,
    flexDirection: "row",
  },
})
export default SearchScreen