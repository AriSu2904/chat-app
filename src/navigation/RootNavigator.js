import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/login/LoginScreen";
import { PATH } from "./NavigationPath";
import HomeScreen from "../screens/main/HomeScreen";
import InformationFormScreen from "../screens/register/InformationFormScreen";
import CredentialFormScreen from "../screens/register/CredentialForm";

const Stack = createNativeStackNavigator();

// create a component
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PATH.SPLASH} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={PATH.SPLASH} component={SplashScreen} />
        <Stack.Screen name={PATH.LOGIN} component={LoginScreen} />
        <Stack.Screen name={PATH.HOME} component={HomeScreen} />
        <Stack.Screen name={PATH.REGISTER} component={InformationFormScreen} />
        <Stack.Screen name={PATH.REGISTER2} component={CredentialFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
