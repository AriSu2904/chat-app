import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "./phone-size/dimension";

// define your styles
export const formStyle = StyleSheet.create({
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
    backgroundColor: "#1E232C",
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
  nameContainer: {
    flexDirection: "row",
    marginRight: screenWidth * 0.021,
    marginVertical: screenHeight * 0.01,
    marginBottom: screenHeight * 0.02,
    gap: screenHeight * 0.01,
  },
  name: {
    borderWidth: 1,
    padding: screenHeight * 0.012,
    width: "50%",
    borderRadius: 15,
    borderColor: "#61677A",
    backgroundColor: "#EEEEEE",
    textAlign: "center",
  },
  registerInput: {
    borderWidth: 1,
    padding: screenHeight * 0.015,
    borderRadius: 18,
    borderColor: "#61677A",
    backgroundColor: "#EEEEEE",
    marginBottom: screenHeight * 0.01,
  },
  dropdown: {
    width: screenWidth * 0.44,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#EEEEEE",
  },
});
