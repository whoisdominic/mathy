import { Dimensions, Text } from "react-native";
import React from "react";

export const Error: React.FC<{ error: string }> = ({ error }) => {
  if (!error) return null;
  return (
    <Text
      style={{
        position: "absolute",
        bottom: Dimensions.get("window").height * 0.225,
        alignSelf: "center",
        fontSize: 50,
        color: "#ae1d1d",
      }}
    >
      {error}
    </Text>
  );
};
