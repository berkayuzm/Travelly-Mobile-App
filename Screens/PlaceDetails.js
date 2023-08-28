import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Touchable,
  TouchableWithoutFeedback
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import LottieView from "lottie-react-native";

const PlaceDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const [place, setPlace] = useState({});
  const [loading, setLoading] = useState(true);
  const [favorite,setFavorite]=useState(false)
  useEffect(() => {
    console.log("Benim idim" + id);
     check();
    axios
      .get(`https://e682-85-96-213-23.ngrok-free.app/placewithcityname/${id}`)
      .then((response) => {
        setPlace(response.data.data);
        setLoading(false);
        
      })
      .catch((err) => {
        console.log(err);
      });
     
  }, []);
  const check=async()=>{
    try {
      const favoritesString=await AsyncStorage.getItem("favorites");
      const favoritesArray=JSON.parse(favoritesString);
      if(favoritesArray.includes(id)){
        setFavorite(true)
      }
      else{
        setFavorite(false);
      }
    } catch (error) {
      
    }
  }
  const changeFavorites= async()=>{
    checkAsyncStorage();
  }
  const checkAsyncStorage= async ()=>{
    try {
      const favoritesString=await AsyncStorage.getItem("favorites");
      const favoritesArray=JSON.parse(favoritesString);
      if(favoritesArray.includes(id)){
        setFavorite(false)
        deleteAsyncStorage();
      }
      else{
        setFavorite(true);
        addAsyncStorage();
      }
    } catch (error) {
      
    }
  }
  const addAsyncStorage= async ()=>{
    try {
      const stringFavorites = await AsyncStorage.getItem("favorites")
     
      const arrayFavorites=JSON.parse(stringFavorites);
      arrayFavorites.push(id);
      await AsyncStorage.setItem("favorites",JSON.stringify(arrayFavorites));
      const data= await AsyncStorage.getItem("favorites");
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteAsyncStorage=async ()=>{
    try {
      const stringFavorites = await AsyncStorage.getItem("favorites")
      
      const arrayFavorites=JSON.parse(stringFavorites);
      const filteredArrayFavorites=arrayFavorites.filter(e=>e!==id)
      await AsyncStorage.setItem("favorites",JSON.stringify(filteredArrayFavorites))
      const data= await AsyncStorage.getItem("favorites");
      console.log(data)
    } catch (error) {
      
    }
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <LottieView
          autoPlay
          loop
          source={require("../assets/loading-screen.json")}
        />
      ) : (
        <>
          <ImageBackground
            source={{ uri: place.imageUrl }}
            resizeMode="cover"
            style={styles.image}
          >
            <TouchableOpacity
              style={styles.backbuttoncontainer}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="chevron-back-sharp" color="black" size={30} />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.detailscontainer}>
            <View style={styles.details}>
              <ScrollView>
                <View style={styles.headerContainer}>
                  <Text style={styles.placename}>{place.name}</Text>
                  <TouchableWithoutFeedback onPress={changeFavorites}>
                    {
                      favorite?
                      <Ionicons style={styles.heartIcon} name="heart" color="#FF7070" size={30} />
                      :
                      <Ionicons style={styles.heartIcon} name="heart-outline" color="#FF7070" size={30} />

                    }
                  </TouchableWithoutFeedback>
                </View>

                <Text style={styles.placecity}>{place.cityName}</Text>
                <View style={styles.maparea}>
                  <MapView
                    style={styles.map}
                    initialRegion={{
                      latitude: place.coordinateX,
                      longitude: place.coordinateY,
                      latitudeDelta: 0.02,
                      longitudeDelta: 0.02,
                    }}
                  >
                    <Marker
                      coordinate={{
                        latitude: place.coordinateX,
                        longitude: place.coordinateY,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                      }}
                      title="Marker"
                    />
                  </MapView>
                </View>
                <Text style={styles.descriptionheadertext}>Açıklama</Text>
                <Text style={styles.descriptiontext}>{place.description}</Text>
              </ScrollView>
            </View>
          </View>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  detailscontainer: {
    backgroundColor: "white",
    height: "60%",
  },
  details: {
    height: "100%",
    backgroundColor: "white",
    bottom: 20,
    borderRadius: 20,
    padding: 25,
  },
  placename: {
    fontSize: 30,
    fontWeight: "bold",
  },
  placecity: {
    fontSize: 16,
    marginBottom: 20,
  },
  maparea: {
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 6.68,
    elevation: 15,
    marginBottom: 20,
  },
  map: {
    width: "100%",
    height: 150,
  },
  descriptionheadertext: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptiontext: {
    fontSize: 15,
  },
  backbuttoncontainer: {
    height: 45,
    width: 45,
    backgroundColor: "white",
    borderRadius: 25,
    marginTop: 40,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  heartIcon:{
    marginTop:4,
    marginRight:10
  }
});
export default PlaceDetails;
