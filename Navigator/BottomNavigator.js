import React from "react";

import { createBottomTabNavigator } from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";

import Profile from "../screens/Movies/Profile";
import ActivityStack from "./ActivityStack";
import Movies from "../screens/Movies/Movies";

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Movies,
      navigationOption: ({ navigation }) => {
        return {
          // headerTransparent: true,
        };
      }
    },
    Activity: ActivityStack,
    Profile: Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home`;
        } else if (routeName === "Activity") {
          iconName = `ios-download`;
        } else if (routeName === "Profile") {
          iconName = `ios-person`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#01C851",
      inactiveTintColor: "#C4C4C4",
      style: {
        backgroundColor: "#28293D"
      }
    }
  }
);

export default BottomNavigator;
