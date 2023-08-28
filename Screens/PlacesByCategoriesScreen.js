import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStyles from "../GlobalStyles";
import PopularCardItem from "../Components/PopularCardItem";
import LottieView from "lottie-react-native";

import { ScrollView } from "react-native";
const PlacesByCategoriesScreen = ({ route, navigation }) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  let { categoryName } = route.params;
  useEffect(() => {
    let { categoryId } = route.params;
    axios
      .get(
        `https://e682-85-96-213-23.ngrok-free.app/placesbycategory/${categoryId}`
      )
      .then((response) => {
        setPlaces(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            autoPlay
            loop
            source={require("../assets/loading-screen.json")}
          />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <Text style={styles.headerText}>{categoryName}</Text>
          <View style={styles.cardContainer}>
            {places.map((place, index) => {
              return (
                <PopularCardItem place={place} key={index} nav={navigation} />
              );
            })}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  loadingContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
    
    
  },
});
export default PlacesByCategoriesScreen;
