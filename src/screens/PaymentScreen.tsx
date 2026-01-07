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
          icon={<Feather name="plus" size={24} color="#FF7622" />}
          title={
            <Text style={{ color: "#FF7622", fontSize: s(14) }}>Add New</Text>
          }
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
          title={
            <Text style={{ color: "#FFFFFF", fontSize: s(14) }}>
              Pay & Confirm
            </Text>
          }
        />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
