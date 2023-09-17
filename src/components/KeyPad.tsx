import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export const KeyPad: React.FC<{
  onKeyPress: (value: number) => void;
  onBackPress: () => void;
  onGo: () => void;
  onNegative: () => void;
}> = ({ onKeyPress, onBackPress, onGo, onNegative }) => {
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

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width * 0.35 }]}>
      {keys.map((key) => (
        <Key
          key={key.value}
          label={key.label}
          value={key.value}
          onPress={key.onPress}
        />
      ))}
      <Negative onPress={onNegative} />
    </View>
  );
};

const Key: React.FC<{
  value: string | number;
  label: string;
  onPress: () => void;
}> = ({ label, onPress }) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View
        style={[
          styles.keyContainer,
          {
            width: (width * 0.33) / 3,
          },
        ]}
      >
        <Text style={styles.keyText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Negative: React.FC<{
  onPress: () => void;
}> = ({ onPress }) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View
        style={[
          {
            width: width * 0.35,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 12,
          },
        ]}
      >
        <Text style={styles.keyText}>negative</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopLeftRadius: 10,
    justifyContent: "center",
  },
  keyContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    overflow: "hidden",
    padding: 24,
  },
  keyText: {
    fontSize: 40,
    color: "#fff",
  },
});
