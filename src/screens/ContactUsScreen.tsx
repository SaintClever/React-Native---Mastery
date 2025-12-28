import React from "react";
import { View, StyleSheet, Text } from "react-native";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";
import { FontAwesome, AntDesign } from "@expo/vector-icons";


const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.screenTitle}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />} title="WhatsApp" />
        <SocialSection icon={<AntDesign name="x" size={24} color="#178AD9" />} title={ " Twiter / X" } />
        <SocialSection icon={<AntDesign name="instagram" size={24} color="#178AD9" />} title={ "Instagram" } />
        <SocialSection icon={<FontAwesome name="snapchat-ghost" size={24} color="#178AD9" />} title={ "Snap Chat" } />
        <SocialSection icon={<AntDesign name="tik-tok" size={24} color="#178AD9" />} title={ "TikTok" } />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },
  socialTitle: {
    fontSize: s(16),
    fontWeight: "semibold",
  },
  screenTitle: {
    fontSize: s(30),
    fontWeight: "semibold",
    marginTop: vs(20),
    marginStart: s(19),
  }
});
