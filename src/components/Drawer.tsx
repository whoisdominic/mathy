import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { useLessonStore } from "../state/useLessonStore";
import { Colors } from "../constants";

const { width } = Dimensions.get("window");

export function Drawer() {
  const {
    min,
    max,
    questionCount,
    setMin,
    setMax,
    setCount,
    setSubtraction,
    subtraction,
  } = useLessonStore();

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Mathy</Text>
      <Spacer />
      <Text style={styles.sliderLabel}>Question Count</Text>
      <Slider
        style={{ width: width * 0.25, height: 50 }}
        onValueChange={setCount}
        step={1}
        value={questionCount}
        minimumValue={1}
        maximumValue={50}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text style={styles.sliderLabel}>{questionCount}</Text>
      <Spacer />
      <Text style={styles.sliderLabel}>Minimum</Text>
      <Slider
        style={{ width: width * 0.25, height: 50 }}
        onValueChange={setMin}
        step={1}
        value={min}
        minimumValue={1}
        maximumValue={max}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text style={styles.sliderLabel}>{min}</Text>
      <Spacer />
      <Text style={styles.sliderLabel}>Maximum</Text>
      <Slider
        style={{ width: width * 0.25, height: 50 }}
        onValueChange={setMax}
        step={1}
        value={max}
        minimumValue={min}
        maximumValue={200}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text style={styles.sliderLabel}>{max}</Text>
      <Spacer />
      <Box on={subtraction} />
    </View>
  );
}

function Spacer() {
  return <View style={{ height: 50 }} />;
}

function Box({ on }: { on: boolean }) {
  const { setSubtraction } = useLessonStore();

  return (
    <TouchableOpacity
      onPress={() => {
        setSubtraction(!on);
      }}
    >
      <View
        style={{
          height: 125,
          width: 160,
          borderRadius: 10,
          backgroundColor: on ? Colors.secondary : "transparent",
          borderColor: "#fff",
          borderWidth: on ? 0 : 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 48, color: "#fff", alignSelf: "center" }}>
          Sub
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272525",
    alignItems: "center",
  },
  sliderLabel: {
    fontSize: 24,
    color: "#fff",
    margin: 8,
  },
  brand: {
    fontSize: 60,
    color: "#fff",
    fontWeight: "bold",
    margin: 50,
  },
});
