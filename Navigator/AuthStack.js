import React from "react";

import {
    createStackNavigator,
  } from "react-navigation";
  
import Login from "../screens/Auths/Login";
import Register from "../screens/Auths/Register";


const AppNavigator = createStackNavigator({
    Register: Register,
    Login: Login,
  },{
      defaultNavigationOptions:{
        header: null
      }
  }
);

  export default AppNavigator