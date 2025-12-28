import { FC } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { s, vs } from "react-native-size-matters";
import { VideoIcon } from "../assets/Icons";


const PhoneWidth = Dimensions.get("window").width;
const cardWidth = (PhoneWidth - s(16) * 3) / 2;

interface MeditationCardProps {
  imageURL: string,
  title: string,
  date: string,
}

const MeditationCard: FC<MeditationCardProps> = ({imageURL, title, date}) => {
  return (
    <ImageBackground
      source={{
        uri: imageURL,
      }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <VideoIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(140),
    width: cardWidth,
    borderRadius: s(12),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: .7,
  },
    overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)"
  },
  liveBadge: {
    backgroundColor: "#E41111",
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    position: "absolute",
    top: vs(7),
    right: s(10),
    justifyContent: "center",
    alignItems: "center",
  },
  liveText: {
    fontSize: s(11),
    fontWeight: "semibold",
    color: "#ffffff",
  },
  cardContent: {
    position: "absolute",
    left: s(10),
    bottom: s(10),
  },
  title: {
    color: "#fff",
    fontSize: s(12),
    fontWeight: "semibold", 
  },
  dateText: {
    fontSize: s(12),
    color: "#fff",
    marginStart: s(7),
  },
});