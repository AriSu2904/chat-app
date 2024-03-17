//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { loginStyle } from "./styles/Login.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { iconStyle } from "./styles/Icon.style";
import { PATH } from "../navigation/NavigationPath";
import { CommonActions } from "@react-navigation/native";

// create a component
const LoginScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.replace(PATH.SPLASH);
  };

  return (
    <SafeAreaView style={loginStyle.container}>
      <View style={iconStyle.iconContainer}>
        <TouchableOpacity style={iconStyle.chevron} onPress={navigate}>
          <ChevronLeftIcon size="40" strokeWidht={(2, 5)} color="black" />
        </TouchableOpacity>
      </View>
      <View style={loginStyle.textContainer}>
        <Text style={loginStyle.welcomeText}>Welcome Back!</Text>
        <Text style={loginStyle.hiText}>Glad to see you again!</Text>
      </View>
      <View style={loginStyle.formContainer}>
        <TextInput style={loginStyle.textInput} keyboardType="email-address" placeholder="Enter your email" />
        <TextInput style={[loginStyle.textInput, { marginTop: 25 }]} secureTextEntry placeholder="Enter your password" />
        <TouchableOpacity style={loginStyle.btnForgotPW}>
          <Text style={loginStyle.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={loginStyle.btnLogin}>
          <Text style={loginStyle.loginText}>Login Now</Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyle.register}>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          Don’t have an account?{" "}
          <Text style={{ color: "#35C2C1", fontWeight: "600" }} onPress={() => navigation.replace(PATH.REGISTER)}>
            Register Now
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default LoginScreen;
