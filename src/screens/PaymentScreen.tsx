import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import PaymentList from "../components/PaymentList";
import CreditCard from "../components/CreditCard";

const PaymentScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: vs(50) }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(37),
          paddingHorizontal: s(16),
        }}
      >
        <BackButton />
        <Text
          style={{
            fontSize: s(17),
            color: "#181C2E",
            marginStart: s(12),
          }}
        >
          Payment
        </Text>
      </View>
      <PaymentList />
      <CreditCard />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
