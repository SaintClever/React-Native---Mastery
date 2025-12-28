import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodLogo from "../assets/FoodLogo";
import SunImage from "../assets/SunImage";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={require("../assets/Logo.png")} /> */}
      <FoodLogo />
      <SunImage style={styles.sunImage} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  sunImage: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
