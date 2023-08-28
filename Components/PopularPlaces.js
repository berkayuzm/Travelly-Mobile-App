import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import PopularCardItem from "./PopularCardItem";
import axios from "axios";
import LottieView from "lottie-react-native";

const PopularPlaces = (props) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://e682-85-96-213-23.ngrok-free.app/placeswithcityname")
      .then((response) => {
        setPlaces(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            autoPlay
            loop
            source={require("../assets/loading-component.json")}
          />
        </View>
      ) : (
        <View style={styles.populararea}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 15,
              paddingLeft: 5,
            }}
          >
            {places.map((place, index) => {
              return (
                <PopularCardItem nav={props.nav} place={place} key={index} />
              );
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  loadingContainer: {
    height:100,
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
    
    
  },
});
export default PopularPlaces;
