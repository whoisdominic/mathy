import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export const KeyPad: React.FC<{
  onKeyPress: (value: number) => void;
  onBackPress: () => void;
  onGo: () => void;
}> = ({ onKeyPress, onBackPress, onGo }) => {
  const keys = [
    { value: 1, label: "1", onPress: () => onKeyPress(1) },
    { value: 2, label: "2", onPress: () => onKeyPress(2) },
    { value: 3, label: "3", onPress: () => onKeyPress(3) },
    { value: 4, label: "4", onPress: () => onKeyPress(4) },
    { value: 5, label: "5", onPress: () => onKeyPress(5) },
    { value: 6, label: "6", onPress: () => onKeyPress(6) },
    { value: 7, label: "7", onPress: () => onKeyPress(7) },
    { value: 8, label: "8", onPress: () => onKeyPress(8) },
    { value: 9, label: "9", onPress: () => onKeyPress(9) },
    { value: "backspace", label: "⌫", onPress: onBackPress },
    { value: 0, label: "0", onPress: () => onKeyPress(0) },
    { value: "enter", label: "go", onPress: onGo },
  ];

  return (
    <View style={styles.container}>
      {keys.map((key) => (
        <Key
          key={key.value}
          label={key.label}
          value={key.value}
          onPress={key.onPress}
        />
      ))}
    </View>
  );
};

const Key: React.FC<{
  value: string | number;
  label: string;
  onPress: () => void;
}> = ({ label, onPress }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
    <View style={styles.keyContainer}>
      <Text style={styles.keyText}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: width * 0.35,
    height: height * 0.4,
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopLeftRadius: 10,
    overflow: "hidden",
  },
  keyContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: (width * 0.35) / 3,
    height: 100,
    overflow: "hidden",
    padding: 24,
  },
  keyText: {
    fontSize: 40,
    color: "#fff",
  },
});
