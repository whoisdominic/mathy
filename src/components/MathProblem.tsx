import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Problem } from "../state/useLessonStore";

const { height, width } = Dimensions.get("window");

const size = width * 0.3;

export const MathProblem: React.FC<{
  problem: Problem;
  answer: string;
}> = ({ problem: { first, second, operator }, answer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.problemText}>{second}</Text>
      <View style={styles.row}>
        <Text style={styles.problemText}>{operator}</Text>
        <Text style={styles.problemText}>{first}</Text>
      </View>
      <Line />
      <Text style={styles.problemText}>{answer ?? "?"}</Text>
    </View>
  );
};

function Line() {
  return (
    <View
      style={{
        width: size,
        height: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignSelf: "flex-end",
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.5,
    left: -32,
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "space-between",
    width: size,
  },
  problemText: {
    fontSize: 120,
    color: "#fff",
    alignSelf: "flex-end",
  },
});
