import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useLessonStore } from "../state/useLessonStore";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export const StartBtn = () => {
  const { start } = useLessonStore();

  const y = useSharedValue(0);

  function bounce() {
    y.value = withRepeat(
      withTiming(24, { duration: 1250, easing: Easing.ease }),
      -1,
      true
    );
  }

  const animStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: y.value }],
    };
  });

  useEffect(() => {
    bounce();
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={start}>
      <Animated.View style={[styles.container, animStyles]}>
        <Text style={styles.text}>Start 😃</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  text: {
    fontSize: 80,
    color: "#2e2d2d",
  },
});

export default StartBtn;
