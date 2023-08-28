import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { TouchableHighlight } from "react-native";

const CityCard = ({ city,nav }) => {
  useEffect(() => {
  }, []);
  const goToPlacesByCityScreen =()=>{
    nav.navigate("Places_By_City_Screen",{id:city.id,name:city.name,nav:nav})
  }
  return (
      <TouchableHighlight onPress={goToPlacesByCityScreen}  underlayColor="#fff" style={styles.cityCardContainer}>
        <Text style={styles.cityNameText}>{city.name}</Text>
      </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cityCardContainer: {
    width: "100%",
    backgroundColor: "#EFEFEF",
    padding: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
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
  cityNameText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
export default CityCard;
