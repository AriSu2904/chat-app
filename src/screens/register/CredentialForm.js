//import liraries
//import liraries
import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, Keyboard } from "react-native";
import { formStyle } from "../styles/form.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { PATH } from "../../navigation/NavigationPath";
import BackIcon from "../shared/BackIcon";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "../shared/DatePicker";
import { screenHeight } from "../styles/phone-size/dimension";

// create a component
const CredentialFormScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.replace(PATH.REGISTER);
  };

  return (
    <SafeAreaView style={formStyle.container}>
      <BackIcon navigate={navigate} />
      <View style={formStyle.textContainer}>
        <Text style={formStyle.welcomeText}>Register to start</Text>
        <Text style={formStyle.hiText}>Conversation!</Text>
      </View>
      <View style={formStyle.formContainer}>
        <View style={[formStyle.userTagInput, { flexDirection: "row", alignItems: "center", gap: 10 }]}>
          <Image style={{ width: 25, height: 25 }} source={require("../../images/price-tag.png")} />
          <View style={{ width: "80%" }}>
            <TextInput placeholder="Enter user tag" />
          </View>
          <TouchableOpacity onPress={() => console.log("Information")}>
            <Image style={{ width: 25, height: 25 }} source={require("../../images/information.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column", gap: screenHeight * 0.015, marginVertical: screenHeight * 0.015 }}>
          <View style={[formStyle.userTagInput, { flexDirection: "row", alignItems: "center", gap: 10 }]}>
            <View style={{ width: "90%" }}>
              <TextInput placeholder="Enter username" />
            </View>
            <TouchableOpacity onPress={() => console.log("Information")}>
              <Image style={{ width: 25, height: 25 }} source={require("../../images/information.png")} />
            </TouchableOpacity>
          </View>
          <TextInput style={formStyle.registerInput} secureTextEntry placeholder="Enter your password" />
          <TextInput style={formStyle.registerInput} secureTextEntry placeholder="Confirm your password" />
        </View>
        <TouchableOpacity style={formStyle.btnNext} onPress={() => navigation.navigate(PATH.REGISTER2)}>
          <Text style={formStyle.loginText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default CredentialFormScreen;
