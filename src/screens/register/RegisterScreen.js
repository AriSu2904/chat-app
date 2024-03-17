//import liraries
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { formStyle } from "../styles/form.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { PATH } from "../../navigation/NavigationPath";
import BackIcon from "../shared/BackIcon";
import { Picker } from "@react-native-picker/picker";

// create a component
const RegisterScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.replace(PATH.SPLASH);
  };

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={formStyle.container}>
      <BackIcon navigate={navigate} />
      <View style={formStyle.textContainer}>
        <Text style={formStyle.welcomeText}>Register to start</Text>
        <Text style={formStyle.hiText}>Conversation!</Text>
      </View>
      <View style={formStyle.formContainer}>
        <View style={formStyle.nameContainer}>
          <TextInput style={formStyle.name} placeholder="your first name" />
          <TextInput style={formStyle.name} placeholder="your last name" />
        </View>
        <TextInput style={formStyle.registerInput} keyboardType="email-address" placeholder="enter your email" />
        <View style={formStyle.nameContainer}>
          <TextInput style={formStyle.name} keyboardType="numeric" placeholder="your phone number" />
          <View>
            <Picker selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
        <TextInput style={formStyle.registerInput} secureTextEntry placeholder="Enter your password" />

        <TouchableOpacity style={formStyle.btnLogin}>
          <Text style={formStyle.loginText}>Register Now</Text>
        </TouchableOpacity>
      </View>
      <View style={formStyle.register}>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          Already have an account?{" "}
          <Text style={{ color: "#35C2C1", fontWeight: "600" }} onPress={() => navigation.replace(PATH.LOGIN)}>
            Login Now
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default RegisterScreen;
