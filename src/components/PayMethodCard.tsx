import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ReactNode, FC } from "react";
import { s, vs } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface PayMethodCardProps {
  isSelected?: boolean;
  title: string;
  icon: ReactNode;
  onPress?: () => void;
}

const PayMethodCard: FC<PayMethodCardProps> = ({
  isSelected = false,
  title,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
      {isSelected && (
        <View style={styles.checkMarkContainer}>
          <FontAwesome name="check" size={s(12)} color="#FFF" />
        </View>
      )}
      <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
        {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PayMethodCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0F5FA",
    borderRadius: s(10),
    width: s(85),
    height: vs(72),
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: s(14),
    color: "#464E57",
    textAlign: "center",
    marginTop: vs(4),
  },
  selectedCardStyle: {
    backgroundColor: "#FFF",
    borderWidth: s(2),
    borderColor: "#FF7622",
  },
  checkMarkContainer: {
    width: s(24),
    height: s(24),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: "#FFF",
    backgroundColor: "#FF7622",
    position: "absolute",
    zIndex: 1,
    top: s(-8),
    right: s(-8),
    justifyContent: "center",
    alignItems: "center",
  },
});
