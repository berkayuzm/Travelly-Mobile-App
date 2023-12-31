import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput,ToastAndroid } from "react-native";
import GlobalStyles from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import CategoryItem from "../Components/CategoryItem";
import { ScrollView } from "react-native";
import PopularCardItem from "../Components/PopularCardItem";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./Favorites";
import SearchScreen from "./SearchScreen";
import Categories from "../Components/Categories";
import PopularPlaces from "../Components/PopularPlaces";
import LottieView from "lottie-react-native";
import Cities from "./Cities";
const Tab = createBottomTabNavigator();
function HomeScreen({ navigation }) {
  const [value,setValue]=useState("");
  const handleSubmit =()=>{
    if(value.length<=1){
      ToastAndroid.showWithGravityAndOffset(
        'En az 2 karakter girmelisin!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
        );
      }
      else{
        let obj={
          value:value
        }
        navigation.navigate("Result_Search",obj)
        
      }
      setValue("")
  }
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.containerIn}>
          <Text style={styles.maintext}>Haydi Başlayalım</Text>
          <View style={styles.searcharea}>
            <View style={styles.searchflex}>
              <Ionicons
                name="search-outline"
                size={28}
                color="#858585"
                style={{ marginRight: 5 }}
              />
              <TextInput
                style={styles.input}
                placeholder={"bir arama yap..."}
                value={value}
                onChangeText={(text)=>setValue(text)}
                onSubmitEditing={handleSubmit}

              />
            </View>
          </View>
          <Text style={styles.categorytext}>Kategoriler</Text>
          <Categories navigation={navigation} />
          <Text style={styles.categorytext}>Öne Çıkanlar</Text>

          <PopularPlaces nav={navigation} />
          <Text style={styles.categorytext}>Harita</Text>
          <View style={styles.maparea}>
            <MapView
              onRegionChange={(region) => {
                console.log(region);
              }}
              initialRegion={{
                latitude: 37.87073695530412,
                latitudeDelta: 0.1338312655649645,
                longitude: 32.50500021675757,
                longitudeDelta: 0.17698857933282852,
              }}
              style={styles.map}
            >
              <Marker
                coordinate={{
                  latitude: 37.87073695530412,
                  longitude: 32.50500021675757,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.05,
                }}
                title="Marker"
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
     
          
    </SafeAreaView>
  );
}
export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          }
          else if (route.name === "Cities") {
            iconName = focused ? "list" : "list-outline";
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
        },
        tabBarActiveTintColor: "#FFF",
      })}
    >
      <Tab.Screen
        options={{
          header: () => null,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          header: () => null,
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          header: () => null,
        }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          header: () => null,
        }}
        name="Cities"
        component={Cities}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerIn:{
    padding:20
  },
  maintext: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    color: "black",
    backgroundColor: "#EFEFEF",
    width: "90%",
    height: 30,
    fontSize: 16,
  },
  searcharea: {
    height: 50,
    padding: 10,
    width: "100%",
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  searchflex: {
    flex: 1,
    flexDirection: "row",
  },
  categorytext: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  categoryarea: {},
  populararea: {},
  map: {
    width: "100%",
    height: 300,
  },
  maparea: {
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 18,
  },
});

export default HomeScreen;
