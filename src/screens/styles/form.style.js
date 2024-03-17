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
    fontSize: 32,
    fontWeight: "600",
    color: "#35C2C1",
  },
  formContainer: {
    flex: 1,
    marginHorizontal: screenWidth * 0.05,
    marginVertical: screenHeight * 0.02,
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
    marginTop: screenWidth * 0.05,
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
  footer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 10,
  },
  nameContainer: {
    flexDirection: "row",
    marginRight: screenWidth * 0.021,
    marginVertical: screenHeight * 0.02,
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
  },
  dropdown: {
    width: screenWidth * 0.44,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#EEEEEE",
  },
  btnNext: {
    marginTop: screenWidth * 0.06,
    padding: screenHeight * 0.018,
    borderRadius: 18,
    backgroundColor: "#1E232C",
  },
  dateInput: {
    borderWidth: 1,
    padding: screenHeight * 0.02,
    borderRadius: 18,
    borderColor: "#61677A",
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
  },
  userTagInput: {
    borderWidth: 1,
    padding: screenHeight * 0.015,
    borderRadius: 18,
    borderColor: "#61677A",
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
  },
});
