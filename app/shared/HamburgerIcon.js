import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import colors from "../config/colors";

function HamburgerIcon(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ marginLeft: 20 }}
      onPress={() => navigation.openDrawer()}
    >
      <Icon name="menu" size={20} color={colors.white} />
    </TouchableOpacity>
  );
}

export default HamburgerIcon;
