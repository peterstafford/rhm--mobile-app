import React from "react";

import FaqTabs from "./FaqTabs";
import HamburgerIcon from "../shared/HamburgerIcon";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
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
import Calendar from "../screens/Calendar";
import Consent from "../screens/Consent";
import Nds from "../screens/Nds";

class Hidden extends React.Component {
  render() {
    return null;
  }
}

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
function DrawerNav() {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator
        initialRouteName="Consent"
        drawerType="front"
        drawerContent={(props) => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames.filter(
                // To hide single option
                // (routeName) => routeName !== 'HiddenPage1',
                // To hide multiple options you can add & condition
                (routeName) => {
                  routeName !== "Consent" &&
                    routeName !== "QuestionaireCompleted";
                }
              ),
              routes: props.state.routes.filter(
                (route) =>
                  route.name !== "Consent" &&
                  route.name !== "QuestionaireCompleted"
              ),
            },
          };
          return (
            <DrawerContentScrollView {...filteredProps}>
              <DrawerItemList {...filteredProps} />
            </DrawerContentScrollView>
          );
        }}
      >
        <Drawer.Screen
          name="Home"
          component={OneStack(
            HomeScreen,
            "Home"
          )} /*place RMHC icon instead of title*/
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="HouseMap"
          component={OneStack(
            HouseMapScreen,
            "House Map"
          )} /*cond. nav w routes*/
          options={{ title: "House Map" }}
        />
        <Drawer.Screen
          name="LocalMap"
          component={OneStack(
            LocalMapScreen,
            "Local Map"
          )} /*cond. nav w routes*/
          options={{ title: "Local Map" }}
        />
        <Drawer.Screen
          name="WifiInfo"
          component={OneStack(WifiInfoScreen, "Wifi Information")}
          options={{ title: "Wifi Information" }}
        />
        {/* <Drawer.Screen
          name="Questionaire"
          component={OneStack(Questionaire, "Questionaire")}
          options={{ title: "Questionaire" }}
        /> */}
        {/* <Drawer.Screen
          name="QuestionaireCompleted"
          component={OneStack(QuestionaireCompleted, "Questionaire")}
          options={{ title: "QuestionaireCompleted" }}
        /> */}
        {/* <Drawer.Screen
          name="Consent"
          component={Consent}
          options={{ title: "Consent" }}
        /> */}
        {/* <Drawer.Screen
          name="Nds"
          component={OneStack(Nds, "Nds")}
          options={{ title: "Nds" }}
        /> */}
        <Drawer.Screen
          name="StoryBox"
          component={OneStack(StoryBox, "Share Your Story")}
          options={{ title: "Share Your Story" }}
        />
        <Drawer.Screen
          name="Calendar"
          component={OneStack(Calendar, "Calendar")}
          options={{ title: "Calendar" }}
        />
        <Drawer.Screen
          name="Suggestions"
          component={OneStack(
            SuggestionBox,
            "Suggestions"
          )} /*cond. nav w routes*/
          options={{ title: "Suggestions" }}
        />
        <Drawer.Screen
          name="Donate"
          component={OneStack(DonationScreen, "Donate")} //screen TBD
          options={{ title: "Donate" }}
        />
        <Drawer.Screen
          name="FAQ"
          component={OneStack(FaqTabs, "FAQ")}
          options={{ title: "FAQ" }}
        />
        <Drawer.Screen
          name="ContactUs"
          component={OneStack(ContactInfoScreen, "Contact Us")}
          options={{ title: "Contact Us" }}
        />
      </Drawer.Navigator>
    </>
  );
}

export default DrawerNav;
