import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useLessonStore } from "../state/useLessonStore";

export function ProblemCount() {
  const { questions, activeQuestion, quit, quizInProgress } = useLessonStore();

  if (!quizInProgress) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Remaining: {questions.length - activeQuestion}
      </Text>
      <TouchableOpacity onPress={quit}>
        <Text style={styles.text}>😰</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 32,
    left: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "92.5%",
  },
  text: {
    fontSize: 48,
    color: "#fff",
  },
});
