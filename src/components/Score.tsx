import { View, StyleSheet, Text } from "react-native";
import { useLessonStore } from "../state/useLessonStore";

export const Score: React.FC = () => {
  const { score } = useLessonStore();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Score: {score}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 60,
    color: "#2e2d2d",
  },
});
