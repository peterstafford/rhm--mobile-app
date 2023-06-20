import React from "react";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  StyleSheet,
  Text,
  Button,
  StatusBar,
  Image,
  Linking,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

const exampleIcon = require("../assets/splash.png");
const houseIcon = require("../assets/house.png");
const localIcon = require("../assets/local.png");
const wifiIcon = require("../assets/wifi.png");
const storyIcon = require("../assets/share.png");
const suggestionIcon = require("../assets/suggestion.png");
const donateIcon = require("../assets/donate.png");
const faqIcon = require("../assets/faq.png");
const contactIcon = require("../assets/contact.png");
const websiteIcon = require("../assets/website.png");
const facebookIcon = require("../assets/facebook.png");
const twitterIcon = require("../assets/twitter.png");
const youtubeIcon = require("../assets/youtube.png");
const calenderIcon = require("../assets/calender.png");
const nds = require("../assets/nds.png");
const ques = require("../assets/questionaire.png");
const volunteerIcon = require("../assets/volunteer.png");


const MenuButton = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(props.screen)}>
      <View style={styles.button}>
        <View style={styles.buttonInner}>
          <Image
            source={props.icon}
            style={{ height: 50, width: 50 }}
            resizeMode="contain"
          />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 16 }}>
              {props.title}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const MenuLink = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => Linking.openURL(props.url)}>
      <View style={styles.button}>
        <View style={styles.buttonInner}>
          <Image
            source={props.icon}
            style={{ height: 50, width: 50 }}
            resizeMode="contain"
          />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 16 }}>
              {props.title}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const SocialButton = (props) => (
  <TouchableWithoutFeedback
    onPress={() => Linking.openURL(props.url)}
    style={styles.socialButton}
  >
    <View style={styles.socialButton}>
      <Image
        source={props.icon}
        style={{ height: 50, width: 50, tintColor: "white" }}
        resizeMode="contain"
      />
    </View>
  </TouchableWithoutFeedback>
);

//add Tab Navigator here?
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <MenuButton icon={houseIcon} title="House Map" screen="HouseMap" />
        <MenuButton icon={localIcon} title="Local Map" screen="LocalMap" />
        <MenuButton
          icon={wifiIcon}
          title="Wifi Information"
          screen="WifiInfo"
        />
        {/* <MenuButton
          icon={ques}
          title="Covid Questionaire"
          screen="Questionaire"
        /> */}
        <MenuLink
          icon={ques}
          title="Wellness"
          url="https://rmhcsdwellness.safebusinesssolutions.com/consentform"
        />
        {/* <MenuButton icon={nds} title="NDS" screen="Nds" /> */}
        <MenuButton
          icon={storyIcon}
          title="Share Your Story"
          screen="StoryBox"
        />
        <MenuButton icon={calenderIcon} title="Events" screen="Events" />
        <MenuButton
          icon={suggestionIcon}
          title="Suggestions"
          screen="Suggestions"
        />
        <MenuButton icon={donateIcon} title="Donate" screen="Donate" />
        <MenuButton icon={volunteerIcon} title="Volunteer" screen="Volunteer" />
        <MenuButton icon={faqIcon} title="FAQ" screen="FAQ" />
        <MenuButton icon={contactIcon} title="Contact Us" screen="ContactUs" />
        <View style={{ height: 80, width: "100%" }}></View>
      </ScrollView>

      <View style={styles.bottom}>
        <SocialButton
          icon={websiteIcon}
          title="Website"
          url="https://rmhcsd.org/"
        />
        <SocialButton
          icon={facebookIcon}
          title="Facebook"
          url="https://www.facebook.com/rmhcsd/"
        />
        <SocialButton
          icon={twitterIcon}
          title="Twitter"
          url="https://twitter.com/rmhcsandiego"
        />
        <SocialButton
          icon={youtubeIcon}
          title="Youtube"
          url="https://www.youtube.com/user/rmhcsd"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  bottom: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  button: {
    display: "flex",
    flex: 1,
    padding: 15,
    minWidth: "40%",
    alignItems: "center",
  },
  buttonInner: {
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 120,
    height: 120,
    borderColor: "#dddddd",
  },
  socialButton: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default HomeScreen;
