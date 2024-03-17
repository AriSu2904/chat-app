import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "./phone-size/dimension";

export const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: screenWidth * 1,
    height: screenHeight * 0.53,
  },
  textContainer: {
    flex: 1,
    marginTop: screenHeight * 0.15,
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    alignSelf: "center",
  },
  btnContainer: {
    marginHorizontal: screenHeight * 0.03,
    marginTop: screenHeight * 0.03,
  },
  btnWithBg: {
    backgroundColor: "#1E232C",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: screenHeight * 0.027,
    paddingVertical: screenHeight * 0.027,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  btnNoBg: {
    borderWidth: 1,
    borderColor: "#35C2C1",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: screenHeight * 0.001,
    paddingVertical: screenHeight * 0.027,
  },
  btnBlackText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
