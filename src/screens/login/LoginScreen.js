//import liraries
import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { formStyle } from "../styles/form.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { PATH } from "../../navigation/NavigationPath";
import BackIcon from "../shared/BackIcon";

// create a component
const LoginScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.replace(PATH.SPLASH);
  };

  return (
    <SafeAreaView style={formStyle.container}>
      <BackIcon navigate={navigate} />
      <View style={formStyle.textContainer}>
        <Text style={formStyle.welcomeText}>Welcome Back!</Text>
        <Text style={formStyle.hiText}>Glad to see you again!</Text>
      </View>
      <View style={formStyle.formContainer}>
        <TextInput style={formStyle.textInput} keyboardType="email-address" placeholder="Enter your email / username" />
        <TextInput style={[formStyle.textInput, { marginTop: 25 }]} secureTextEntry placeholder="Enter your password" />
        <TouchableOpacity style={formStyle.btnForgotPW}>
          <Text style={formStyle.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={formStyle.btnLogin}>
          <Text style={formStyle.loginText}>Login Now</Text>
        </TouchableOpacity>
      </View>
      <View style={formStyle.footer}>
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
