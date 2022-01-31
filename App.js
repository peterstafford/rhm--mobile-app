import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNav from "./app/navigation/DrawerNav";
import StackNav from "./app/navigation/StackNav";

// To see all the requests in the chrome Dev tools in the network tab.
// XMLHttpRequest = GLOBAL.originalXMLHttpRequest
//   ? GLOBAL.originalXMLHttpRequest
//   : GLOBAL.XMLHttpRequest;

// // fetch logger
// global._fetch = fetch;
// global.fetch = function (uri, options, ...args) {
//   return global._fetch(uri, options, ...args).then((response) => {
//     console.log("Fetch", { request: { uri, options, ...args }, response });
//     return response;
//   });
// };

//With current navigation layout, button navigation doesn't work properly
//  since there is only one stack
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
