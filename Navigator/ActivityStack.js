import React from "react";

import { createStackNavigator } from "react-navigation";

import HeaderIcon from "../components/HeaderIcon";
import Download from "../screens/Movies/Download";

const AppNavigator = createStackNavigator({
  Download: {
    screen: Download,
    navigationOptions: ({ navigation }) => {
      return {
        headerTransparent: false,
        title: "Downloads",
        headerStyle: {
          backgroundColor: "#27293D"
        },
        headerTitleStyle: {
          // fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 20,
          lineHeight: 27,
          color: "#01C851",
          borderBottomColor: "#01C851",
          borderBottomWidth: 2
        }
      };
    }
  }
});

export default AppNavigator;
