import React from "react";

import { createStackNavigator } from "react-navigation";

import BottomNavigator from "../Navigator/BottomNavigator";
import MovieDetail from "../screens/Movies/MovieDetail";
import HeaderIcon from "../components/HeaderIcon";

const AppNavigator = createStackNavigator(
  {
    Movies: BottomNavigator,
    MovieDetail: MovieDetail
  },
  {
    defaultNavigationOptions: {
      headerTransparent: true
    }
  }
);

export default AppNavigator;
