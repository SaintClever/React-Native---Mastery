import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import Card from "../assets/Card";

const CreditCard = () => {
  return (
    <View
      style={{
        marginTop: vs(25),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: s(327),
          height: vs(257),
          borderRadius: s(10),
          backgroundColor: "#F7F8F9",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card />
        <Text
          style={{
            fontWeight: 700,
            fontSize: s(16),
          }}
        >
          No master card added
        </Text>
        <Text
          style={{
            fontWeight: 400,
            fontSize: s(15),
          }}
        >
          You can add a mastercard and save it for later
        </Text>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({});
