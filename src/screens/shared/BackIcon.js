//import liraries
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { iconStyle } from "../styles/Icon.style";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

// create a component
const BackIcon = ({ navigate }) => {
  return (
    <View style={iconStyle.iconContainer}>
      <TouchableOpacity style={iconStyle.chevron} onPress={navigate}>
        <ChevronLeftIcon size="40" strokeWidht={(2, 5)} color="black" />
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default BackIcon;
