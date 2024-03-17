//import liraries
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { screenWidth } from "../styles/phone-size/dimension";

// create a component
const DatePicker = ({ date, onChange, text }) => {
  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: date,
      is24Hour: true,
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: "90%" }}>
          <Text style={{ color: "#1E232C", fontWeight: "500", alignSelf: "center", marginLeft: screenWidth * 0.09 }}>{text}</Text>
        </View>
        <View style={{ width: "10%" }}>
          <Image style={{ width: 25, height: 25 }} source={require("../../images/calendar.png")} />
        </View>
        {/* {text === "Select birth date" ? <Image style={{ width: 20, height: 20 }} source={require("../../images/calendar.png")} /> : null} */}
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default DatePicker;
