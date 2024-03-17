//import liraries
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PATH } from "../navigation/NavigationPath";
import { splashStyle } from "./styles/Splash.style";

// create a component
const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={splashStyle.container}>
      <View style={splashStyle.container}>
        <Image source={require("../images/hands.png")} resizeMode="contain" style={splashStyle.image} />
      </View>
      <View style={splashStyle.textContainer}>
        <Text style={splashStyle.text}>Hi, Glad to see you</Text>
        <View style={splashStyle.btnContainer}>
          <TouchableOpacity style={splashStyle.btnWithBg} onPress={() => navigation.replace(PATH.LOGIN)}>
            <Text style={splashStyle.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={splashStyle.btnNoBg} onPress={() => navigation.replace(PATH.REGISTER)}>
            <Text style={splashStyle.btnBlackText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
