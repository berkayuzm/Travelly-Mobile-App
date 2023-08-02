import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
function CategoryItem(props) {
 
  return (
    <View style={styles.categorycontainer} >
        <View style={styles.categoryflex}>
          <View style={styles.imagecontainer}>
            <Image
              source={require("../assets/beach.jpg")}
              style={styles.image}
            />
          </View>
          <Text style={styles.categorynametext}>Category</Text>
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  categoryflex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  categorycontainer: {
    height: 100,
  },
  imagecontainer: {
    padding: 12,
    borderRadius: 60,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 6,
  },
  image: {
    height: 40,
    width: 40,
  },
  categorynametext: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryItem;
