import { StyleSheet } from "react-native";

export const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 380,
    height: 430,
  },
  textContainer: {
    flex: 1,
    marginTop: 70,
  },
  text: {
    fontSize: 32,
    fontWeight: "400",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#1E232C",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    paddingVertical: 20,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
