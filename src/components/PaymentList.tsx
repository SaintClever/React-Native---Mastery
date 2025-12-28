import { View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { s, vs } from "react-native-size-matters";
import {
  CashIcon,
  VisaIcon,
  MastercardIcon,
  PayPalIcon,
} from "../assets/Icons";
import PayMethodCard from "./PayMethodCard";

const paymentMethods = [
  { label: "Cash", icon: <CashIcon /> },
  { label: "Visa", icon: <VisaIcon /> },
  { label: "Mastercard", icon: <MastercardIcon /> },
  { label: "PayPal", icon: <PayPalIcon /> },
];

const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <View>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PayMethodCard
            title={item.label}
            icon={item.icon}
            onPress={() => setSelectedMethod(item.label)}
            isSelected={selectedMethod === item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(15),
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
