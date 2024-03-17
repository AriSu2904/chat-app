//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, Keyboard } from "react-native";
import { formStyle } from "../styles/form.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { PATH } from "../../navigation/NavigationPath";
import BackIcon from "../shared/BackIcon";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "../shared/DatePicker";
import { compareDate, extractDate } from "../../utils/dateUtil";
import { keyboardCheck } from "../../utils/keyboardChecker";

// create a component
const InformationFormScreen = ({ navigation }) => {
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

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  keyboardCheck(setKeyboardVisible);

  const displayText = extractDate(selectedDate);

  return (
    <SafeAreaView style={formStyle.container}>
      <BackIcon navigate={navigate} />
      <View style={formStyle.textContainer}>
        <Text style={formStyle.welcomeText}>
          Let us know <Text style={formStyle.hiText}>you!</Text>
        </Text>
      </View>
      <View style={formStyle.formContainer}>
        <View style={formStyle.nameContainer}>
          <TextInput style={formStyle.name} placeholder="Your first name" />
          <TextInput style={formStyle.name} placeholder="Your last name" />
        </View>
        <TextInput style={formStyle.registerInput} keyboardType="email-address" placeholder="Enter your email" />
        <View style={formStyle.nameContainer}>
          <TextInput style={formStyle.name} keyboardType="numeric" placeholder="Your phone number" />
          <Dropdown
            style={formStyle.dropdown}
            placeholderStyle={{ fontSize: 14, color: "#1E232C" }}
            data={genders}
            maxHeight={300}
            selectedTextStyle={{ fontSize: 14, color: "#1E232C" }}
            labelField="label"
            valueField="value"
            placeholder="Select gender"
            value={selectedGender}
            onChange={(item) => {
              setGender(item);
            }}
          />
        </View>
        <View style={formStyle.dateInput}>
          <DatePicker date={selectedDate} onChange={onChange} text={displayText} />
        </View>
        <TouchableOpacity style={formStyle.btnNext} onPress={() => navigation.navigate(PATH.REGISTER2)}>
          <Text style={formStyle.loginText}>Next</Text>
        </TouchableOpacity>
      </View>
      {!keyboardVisible && (
        <View style={formStyle.footer}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            Already have an account?{" "}
            <Text style={{ color: "#35C2C1", fontWeight: "600" }} onPress={() => navigation.replace(PATH.LOGIN)}>
              Login Now
            </Text>
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

//make this component available to the app
export default InformationFormScreen;
