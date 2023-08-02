import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LogBox } from "react-native";
import React, { useEffect } from "react";
import { Image } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const PlaceDetails = (props) => {
  useEffect(() => {});

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/mevlana.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableOpacity
          style={styles.backbuttoncontainer}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-sharp" color="black" size={30} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.detailscontainer}>
        <View style={styles.details}>
          <ScrollView>
            <Text style={styles.placename}>Mevlana Türbesi</Text>
            <Text style={styles.placecity}>Konya</Text>
            <View style={styles.maparea}>
              <MapView
              
                style={styles.map}
                initialRegion={{
                  latitude:37.853183062061504,
                  longitude:32.42112062474019,
                  latitudeDelta:0.02,
                  longitudeDelta:0.02
                }}
              >
                <Marker coordinate={{
                latitude:37.853183062061504,
                longitude:32.42112062474019,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }} title="Marker"/>
              </MapView>
            </View>
            <Text style={styles.descriptionheadertext}>Açıklama</Text>
            <Text style={styles.descriptiontext}>
              Konya'da yer alan Mevlana Müzesi, aynı zamanda Mevlana Türbesi
              olarak da adlandırılmaktadır. Geçmişte Mevlana'nın dergahı olan
              yapı kompleksinde 1926 yılından beri ziyaretçilerine kapılarını
              aralamaktadır. Yeşil Kubbe ismiyle adlandırılan türbe, dört kalın
              sütun üzerine Mimar Tebrizli Bedrettin tarafından inşa edilmiştir.
              İnşa edildiği ilk günden itibaren ekleme yapılarak geliştirilen
              türbenin bakımında oldukça hassas davranılmıştır. Yeşil kubbesiyle
              etkileyici bir mimariyi gözler önüne seren Mevlana Türbesinin yer
              aldığı bölge, geçmişte Selçuklu Sarayı'nın gül bahçesiyken
              Mevlana'nın babası olan Sultanü'l-Ulema Bahaeddin Veled'e hediye
              edilmiştir. Mevlana'nın babası vefat ettiği zaman yakınları
              babasının mezarının olduğu yere bir türbe yaptırmayı teklif
              etmişlerdir. Ancak bu istediği reddeden Mevlana, gökkubbeden daha
              iyi bir türbe olmayacağını ifade etmiştir. Bunun üzerine
              Mevlana'nın babası gül bahçesine defnedilmiştir. 17 Aralık 1273
              yılında Mevlana vefat ettikten sonra oğlu Sultan Veled, babasının
              mezarı üzerine türbe yaptırma önerisine olumlu bakarak bu alanda
              bir türbe inşa ettirmiştir.
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
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
});
export default PlaceDetails;
