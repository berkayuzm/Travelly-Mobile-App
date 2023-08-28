import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import axios from "axios";
import LottieView from "lottie-react-native";
const Categories = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
    console.log("fetch data")
  },[]);
  const fetchData = () => {
      axios
        .get("https://e682-85-96-213-23.ngrok-free.app/category")
        .then((response) => {
          setCategories(response.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
  };
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
        <View style={styles.categoryarea}>
          <ScrollView
            contentContainerStyle={{
              padding: 5,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category, index) => {
              return (
                <CategoryItem
                  key={index}
                  category={category}
                  navigation={navigation}
                />
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
export default Categories;
