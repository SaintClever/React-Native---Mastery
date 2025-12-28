import { View, Text, StyleSheet, FlatList } from "react-native";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";


const HomeScreen = () => {
  console.log(dummyData);
  return (
    <View
      style={{
        marginTop: vs(50),
        paddingHorizontal: s(16),
      }}
    >
      <Text
        style={{
          color: "#1D150F",
          fontSize: s(20),
          fontWeight: "semibold",
          marginBottom: vs(6),
        }}
      >Meditations</Text>
      <Text
        style={{
          color: "#2C2016",
          fontSize: s(14),
          marginBottom: vs(16),
        }}
        >Lorem Ipsum is simply dummy text</Text>
        <TopTabs />
        {/* <MeditationCard /> */}
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <MeditationCard imageURL={item.image} title={item.title} date={item.date} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            marginBottom: vs(16),
            justifyContent: "space-between"
          }}
          contentContainerStyle={{
            paddingBottom: vs(150),
            paddingTop: vs(24)
          }}
        />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});