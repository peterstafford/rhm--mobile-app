import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FaqTabs from "./FaqTabs";
import HamburgerIcon from "../shared/HamburgerIcon";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";

import HomeScreen from "../screens/HomeScreen";
import ContactInfoScreen from "../screens/ContactInfoScreen";
import LocalMapScreen from "../screens/LocalMapScreen";
import WifiInfoScreen from "../screens/WifiInfoScreen";
import DonationScreen from "../screens/DonationScreen";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import HouseMapScreen from "../screens/HouseMapScreen";
import StoryBox from "../screens/StoryBox";
import SuggestionBox from "../screens/SuggestionBox";
import Questionaire from "../screens/Questionaire";
import QuestionaireCompleted from "../screens/QuestionaireCompleted";
import Consent from "../screens/Consent";
import Nds from "../screens/Nds";

const OneStack =
  (screen, title) =>
  ({ route }) => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerLeft: () => <HamburgerIcon />,
        }}
        initialRouteName={route.name}
      >
        <Stack.Screen
          name={route.name}
          component={screen}
          options={{ title }}
        />
      </Stack.Navigator>
    );
  };

// next: stylize drawers
function StackNav() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerLeft: () => <HamburgerIcon />,
        }}
        // initialRouteName={route.name}
      >
        <Stack.Screen
          name="Consent"
          component={Consent}
          options={{ title: "Consent" }}
        />
      </Stack.Navigator>
    </>
  );
}

export default StackNav;
