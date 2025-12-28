import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import SendIcon from "./SendButton";
import { s } from "react-native-size-matters";

interface SocialSectionProps {
  title: string;
  icon: React.ReactNode;
}

const SocialSection: FC<SocialSectionProps> = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
      <SendIcon />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ECF0F4",
    paddingVertical: s(15),
  },
  text: {
    marginStart: s(14),
    flex: 1,
    color: "#8083A3",
    fontSize: s(12),
  },
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: s(1),
    borderColor: "#ECF0F4",
  },
});
