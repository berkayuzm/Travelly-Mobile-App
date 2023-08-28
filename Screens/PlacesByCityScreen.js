import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import axios from "axios";
import LottieView from "lottie-react-native";
import PopularCardItem from "../Components/PopularCardItem";

const PlacesByCityScreen = ({ route }) => {
  let { id, name ,nav} = route.params;
  const [places,setPlaces]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    axios
    .get(`https://e682-85-96-213-23.ngrok-free.app/placesbycity/${id}`)
    .then((response) => {
      setPlaces(response.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <View style={GlobalStyles.droidSafeArea}>

        {
            loading?
            <LottieView
          autoPlay
          loop
          source={require("../assets/loading-screen.json")}
        />:

        <ScrollView style={styles.container}>
            <View style={styles.containerIn}>
            <Text style={styles.headerText}>{name}</Text>
            <View style={styles.cardContainer}>
            {
           places.length>0?

               places.map((place, index) => {
                 return (
                   <PopularCardItem nav={nav} place={place} key={index} />
                 );
               })
           :
           <View style={styles.noFoundContainer}>
           <View style={styles.noFoundCard}>
             <Text style={styles.noFoundText}>Burası şimdilik boş..</Text>
           </View>
         </View>
            }
            </View>
            </View>
        </ScrollView>
        }
    </View>
  );
};
const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom:10
  },
  container: {
    flex: 1,
    width: "100%",
  },
  containerIn: {
    padding: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  noFoundCard: {
    backgroundColor: "red",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  noFoundText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  noFoundContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop:200
  },
});
export default PlacesByCityScreen;
