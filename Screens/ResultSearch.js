import { View, Text, SafeAreaView, StyleSheet,ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import axios from "axios";
import LottieView from "lottie-react-native";
import PopularCardItem from "../Components/PopularCardItem";

const ResultSearch = ({ route, navigation }) => {
  const { value } = route.params;
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://e682-85-96-213-23.ngrok-free.app/places/${value}`)
      .then((response) => {
        setLoading(false);
        setPlaces(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
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
        <View style={styles.container}>
          <Text style={styles.mainText}>"{value}" araması için sonuçlar :</Text>
          {places.length > 0 ? (
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer} >
              {places.map((place, index) => {
                return (<View style={styles.cardcontainer} key={index} >

                  <PopularCardItem nav={navigation} place={place} />
                </View>
                 
                
                  );
              })}
            </ScrollView>
          ) : (
            <View style={styles.noFoundContainer}>

            <View style={styles.noFoundCard}>
              <Text style={styles.noFoundText}>
                Böyle bir yer bulunamadı.
              </Text>
            </View>
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex:1
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  cardcontainer:{

    flexDirection: "row",
    flexWrap: "wrap",
  },
  noFoundCard:{
    backgroundColor:"red",
    alignItems:"center",
    padding:15,
    borderRadius:10,
    
  },
  noFoundText:{
    fontSize: 18,
    fontWeight: "bold",
    color:"white",
    
  },
  noFoundContainer:{
    flex:1,
    justifyContent:"center"
    
  },
  scrollContainer:{
    
  },
  contentContainer:{flexDirection:'row',flexWrap:"wrap"}
});
export default ResultSearch;
