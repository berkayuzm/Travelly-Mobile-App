import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";

function PopularCardItem(props) {
  const goToDetailScreen=()=>{
    let nav=props.nav;
    props.nav.navigate("Detail_Screen",nav)
  }
  return (
    <TouchableOpacity style={styles.cartcontainer} onPress={goToDetailScreen}  >
      <View style={styles.imagecontainer}>
        <Image source={require("../assets/mevlana.jpg")} style={styles.image} />
      </View>
      <View style={styles.textarea}>
        <Text style={styles.placename}>Mevlana Türbesi</Text>
        <Text style={styles.placecity}>Konya</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PopularCardItem;
const styles = StyleSheet.create({
  cartcontainer: {
    height: 200,
    width: 150,
    marginRight:20,
    backgroundColor: "#EFEFEF",
    paddingTop:8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 8,

  },
  image: {
    height: "100%",
    width: "92%",
    borderRadius: 20,
  },
  imagecontainer: {
    flex: 7.5,
    alignItems: "center",
    
  },
  placename: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textarea:{
    flex:2.5,
    paddingLeft:10,
    justifyContent:"flex-end",
    paddingBottom:10,
    
  },
  placecity:{
    fontSize:15,
  }
});
