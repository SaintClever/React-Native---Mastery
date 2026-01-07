import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { FC } from "react";

interface AddButtonProps {
  bgColor: string;
  icon?: React.ReactNode;
  title: React.ReactNode;
}

const AddButton: FC<AddButtonProps> = ({ bgColor, icon, title }) => {
  return (
    <TouchableOpacity
      style={{
        borderColor: "#F0F5FA",
        borderWidth: s(2),
        backgroundColor: bgColor,
        borderRadius: s(10),
        paddingVertical: vs(15),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: vs(15),
      }}
    >
      {icon} {title}
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
