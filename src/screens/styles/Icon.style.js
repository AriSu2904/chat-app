import { Dimensions, StyleSheet } from "react-native";
import { screenHeight } from "./phone-size/dimension";

export const iconStyle = StyleSheet.create({
  iconContainer: {
    alignItems: "flex-start",
  },
  chevron: {
    borderWidth: 1.5,
    borderColor: "#35C2C1",
    padding: 5,
    borderRadius: 15,
    marginLeft: screenHeight * 0.025,
    marginBottom: screenHeight * 0.02,
  },
});
