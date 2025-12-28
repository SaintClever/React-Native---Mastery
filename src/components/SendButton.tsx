import { StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import { SendIcon } from "../assets/Icons";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendIcon />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  circle: {
    width: s(46),
    height: s(46),
    borderRadius: s(40),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1077AF",
  },
});
