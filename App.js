import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNav from "./app/navigation/DrawerNav";
import StackNav from "./app/navigation/StackNav";


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
