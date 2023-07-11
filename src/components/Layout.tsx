import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import React from "react";
import { useLessonStore } from "../state/useLessonStore";
import { Colors } from "../constants";

const { width, height } = Dimensions.get("window");

export const Background: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { backgroundColor } = useLessonStore();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          styles.background,
          {
            backgroundColor,
          },
        ]}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export const Container: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <View style={styles.container}>{children}</View>;
};

export const Aside: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <View style={styles.aside}>{children}</View>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    width: width * 0.65,
    height,
    alignItems: "center",
    justifyContent: "center",
  },
  aside: {
    backgroundColor: Colors.gray,
    height,
    width: width * 0.35,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 12,
    paddingTop: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
