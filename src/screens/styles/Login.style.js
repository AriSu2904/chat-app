import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "./phone-size/dimension";

// define your styles
export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "600",
  },
  hiText: {
    fontSize: 25,
    fontWeight: "400",
    alignSelf: "center",
  },
  formContainer: {
    flex: 1,
    marginTop: screenHeight * 0.05,
    marginHorizontal: screenWidth * 0.05,
    marginVertical: screenHeight * 0.01,
  },
  textInput: {
    borderWidth: 1,
    padding: screenHeight * 0.02,
    borderRadius: 18,
    borderColor: "#61677A",
    backgroundColor: "#EEEEEE",
  },
  btnForgotPW: {
    padding: 10,
    alignSelf: "flex-end",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#61677A",
  },
  btnLogin: {
    marginTop: screenWidth * 0.15,
    padding: screenHeight * 0.027,
    borderRadius: 18,
    backgroundColor: "#272829",
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "center",
  },
  register: {
    flex: 0.1,
    alignSelf: "center",
  },
});
