//import liraries
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

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
      <TouchableOpacity onPress={showDatePicker} style={{ flexDirection: "row", gap: 10 }}>
        <Text style={{ color: "black", fontWeight: "500" }}>{text}</Text>
        {/* {text === "Select birth date" ? <Image style={{ width: 20, height: 20 }} source={require("../../images/calendar.png")} /> : null} */}
        <Image style={{ width: 20, height: 20 }} source={require("../../images/calendar.png")} />
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default DatePicker;
