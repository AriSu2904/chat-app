//import liraries
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PATH } from "../navigation/NavigationPath";
import { splashStyle } from "./styles/Splash.style";

// create a component
const SplashScreen = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate(PATH.LOGIN);
  //   }, 3000);
  // }, []);

  return (
    <SafeAreaView style={splashStyle.container}>
      <View style={splashStyle.container}>
        <Image source={require("../images/hands.png")} resizeMode="contain" style={splashStyle.image} />
      </View>
      <View style={splashStyle.textContainer}>
        <Text style={splashStyle.text}>W e l c o m e</Text>
        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity style={splashStyle.btn}>
            <Text style={splashStyle.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
