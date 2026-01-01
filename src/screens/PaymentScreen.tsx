import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";

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
      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
        <View
          style={{
            marginTop: vs(15),
            width: s(327),
            height: vs(62),
            borderRadius: s(10),
            borderWidth: 2,
            borderColor: "#F0F5FA",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "semibold",
              fontSize: s(14),
              color: "#FF7622",
              textAlign: "center",
            }}
          >
            + ADD NEW
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
