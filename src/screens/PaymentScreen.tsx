import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddButton from "../components/AddButton";
import Feather from "@expo/vector-icons/Feather";

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
        <AddButton
          bgColor="#FFF"
          fontColor="#FF7622"
          icon={<Feather name="plus" size={24} color="#FF7622" />}
          title={"Add New"}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: vs(20),
            gap: s(14),
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: 400,
              fontSize: s(14),
              color: "#A0A5BA",
            }}
          >
            TOTAL:
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: s(30),
              color: "#181C2E",
            }}
          >
            $96
          </Text>
        </View>
        <AddButton
          bgColor="#FF7622"
          fontColor="#FFFFFF"
          title={"Pay & Confirm"}
        />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
