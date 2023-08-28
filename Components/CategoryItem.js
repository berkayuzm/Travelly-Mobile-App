import React, { useEffect, useState } from "react";
import { TouchableHighlight } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
function CategoryItem(props) {
  const goToPlacesByCategoriesScreen = () => {
    let categoryId = props.category.id;
    props.navigation.navigate("Places_By_Categories_Screen", {
      categoryId: categoryId,
      categoryName: props.category.name,
    });
  };
  return (

        <View style={styles.categorycontainer}>
          <View style={styles.categoryflex}>
            <TouchableHighlight style={styles.imagecontainer} onPress={goToPlacesByCategoriesScreen} underlayColor="#EFEFEF">
              <Image
                source={{ uri: props.category.imageUrl }}
                style={styles.image}
              />
            </TouchableHighlight>
            <Text style={styles.categorynametext}>{props.category.name}</Text>
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
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CategoryItem;
