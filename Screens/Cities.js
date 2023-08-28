import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import CityCard from "../Components/CityCard";
import axios from "axios";
import LottieView from "lottie-react-native";

const Cities = ({navigation}) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(navigation)
    axios
      .get("https://e682-85-96-213-23.ngrok-free.app/city")
      .then((response) => {
        setCities(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      {loading ? (
        <LottieView
          autoPlay
          loop
          source={require("../assets/loading-screen.json")}
        />
      ) : (
        <>
          <Text style={sytles.headerText}>Hangi şehirdesin ?</Text>
          <ScrollView style={sytles.container}>
            <View style={sytles.containerIn}>
              {
                cities.map((city,index)=>{
                   return <CityCard city={city} nav={navigation} key={index}/>
                })
              }
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

const sytles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  containerIn: {
    padding: 20,
  },
});
export default Cities;
