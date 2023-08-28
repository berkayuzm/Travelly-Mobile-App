import React from "react";
import { TouchableOpacity, TouchableHighlight } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";

function PopularCardItem(props) {
  const goToDetailScreen = () => {
    let nav = props.nav;
    let obj = {
      nav: nav,
      id: props.place.id,
    };
    props.nav.navigate("Detail_Screen", obj);
  };
  return (
    <TouchableHighlight
      style={styles.cartcontainer}
      onPress={goToDetailScreen}
      underlayColor="white"
    >
      <>
        <View style={styles.imagecontainer}>
          <Image source={{ uri: props.place.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.textarea}>
          <Text style={styles.placename}>
            {props.place.name.length > 12
              ? props.place.name.slice(0, 12) + ".."
              : props.place.name}
          </Text>
          <Text style={styles.placecity}>{props.place.cityName}</Text>
        </View>
      </>
    </TouchableHighlight>
  );
}

export default PopularCardItem;
const styles = StyleSheet.create({
  cartcontainer: {
    height: 200,
    width: 150,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: "#EFEFEF",
    paddingTop: 8,
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
  textarea: {
    flex: 2.5,
    paddingLeft: 10,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  placecity: {
    fontSize: 15,
  },
});
