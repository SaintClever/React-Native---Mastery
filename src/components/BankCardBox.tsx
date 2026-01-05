import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { BankCardIcon } from "../assets/Icons";
import LottieView from "lottie-react-native";

const BankCardBox = () => {
  return (
    <View style={styles.container}>
      <BankCardIcon />

      {/* <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: s(150),
          height: s(150),
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/BankCardAnimation.json")}
      /> */}

      <Text
        style={{
          color: "#32343E",
          fontSize: s(16),
          fontWeight: "bold",
          marginTop: vs(17),
        }}
      >
        No master card added
      </Text>
      <Text
        style={{
          color: "#2D2D2D",
          fontSize: s(15),
          marginTop: vs(6),
          textAlign: "center",
        }}
      >
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9",
    // width: s(327),
    borderRadius: s(10),
    marginTop: vs(25),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: vs(35),
    paddingHorizontal: s(30),
  },
});
