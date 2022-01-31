import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DayFaqScreen from "../screens/DayFaqScreen";
import GuestFaqScreen from "../screens/GuestFaqScreen";
import colors from "../config/colors";

const TopTabBar = createMaterialTopTabNavigator();

function FaqTabs() {
  return (
    <TopTabBar.Navigator
      tabBarOptions={{
        style: { backgroundColor: colors.secondary },
      }}
    >
      <TopTabBar.Screen
        name="DayFaq"
        component={DayFaqScreen}
        options={{ title: "Day Visitors" }}
      />
      <TopTabBar.Screen
        name="GuestFaq"
        component={GuestFaqScreen}
        options={{ title: "Overnight Visitors" }}
      />
    </TopTabBar.Navigator>
  );
}

const styles = StyleSheet.create({});

export default FaqTabs;
