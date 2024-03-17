//import liraries
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { formStyle } from "../styles/form.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { PATH } from "../../navigation/NavigationPath";
import BackIcon from "../shared/BackIcon";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "../shared/DatePicker";
import { compareDate, extractDate } from "../../utils/dateUtil";

// create a component
const RegisterScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.replace(PATH.SPLASH);
  };

  const genders = [
    { label: "Laki-laki", value: "Laki-laki" },
    { label: "Perempuan", value: "Perempuan" },
  ];

  const [selectedGender, setGender] = useState();
  const [selectedDate, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const displayText = compareDate(selectedDate) ? "Select birth date" : extractDate(selectedDate);

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
          <Dropdown
            style={formStyle.dropdown}
            placeholderStyle={{ fontSize: 14, color: "#1E232C" }}
            data={genders}
            maxHeight={300}
            selectedTextStyle={{ fontSize: 14, color: "#1E232C" }}
            labelField="label"
            valueField="value"
            placeholder="Select Gender"
            value={selectedGender}
            onChange={(item) => {
              setGender(item);
            }}
          />
        </View>
        <View style={formStyle.nameContainer}>
          <View style={[formStyle.name, { justifyContent: "center", alignItems: "center" }]}>
            <DatePicker date={selectedDate} onChange={onChange} text={displayText} />
          </View>
          <TextInput style={formStyle.name} placeholder="Enter user tag" />
        </View>
        <TextInput style={formStyle.registerInput} secureTextEntry placeholder="Enter your password" />
        <TouchableOpacity style={formStyle.btnLogin} onPress={() => console.log(displayText)}>
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
