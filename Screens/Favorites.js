import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import axios from "axios";
import LottieView from "lottie-react-native";
import PopularCardItem from "../Components/PopularCardItem";
import { ScrollView, RefreshControl } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Favorites({ navigation }) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(()=>{
    const focusHandler = navigation.addListener('focus', () => {
      fetchData();
  });
  return focusHandler;
  },[navigation])
  useEffect(() => {
    setLoading(false);
    console.log("favorilerim=>" + favorites);
  }, [favorites]);
  const check = async () => {
    try {
      const favoritesString = await AsyncStorage.getItem("favorites");
      const favoritesArray = JSON.parse(favoritesString);
      setFavorites(favoritesArray);
    } catch (error) {}
  };
  const fetchData = () => {
    axios
      .get(`https://e682-85-96-213-23.ngrok-free.app/place`)
      .then((response) => {
        setPlaces(response.data.data);
        setLoading(false);
        setRefresh(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    check();
  };
  const pullMe = () => {
    setRefresh(true);
    fetchData();
  };
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      {loading ? (
        <LottieView
          autoPlay
          loop
          source={require("../assets/loading-screen.json")}
        />
      ) : (
        <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={pullMe} />
          }
        >
         
          <Text style={styles.mainText}>Favorilerim</Text>
          {favorites.length > 0 ? (
            <View style={styles.cardcontainer}>
              {places.map((place, index) => {
                if (favorites.includes(place.id)) {
                  return (
                    <PopularCardItem
                      nav={navigation}
                      place={place}
                      key={index}
                    />
                  );
                }
              })}
            </View>
          ) : (
            <View style={styles.noFoundContainer}>
              <View style={styles.noFoundCard}>
                <Text style={styles.noFoundText}>Henüz herhangi bir yeri favorilerine eklemedin!</Text>
              </View>
            </View>
          )}
        </ScrollView>
          </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
  },
  mainText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardcontainer: {
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

export default Favorites;
