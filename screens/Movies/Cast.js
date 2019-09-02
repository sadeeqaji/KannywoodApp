import React from "react";
import { View, Text } from "react-native";

export default class Review extends React.Component {
  navigationOptions = {
    style: {
      backgroundColor: "#28293D"
    }
  };
  render() {
    return (
      <View style={{ backgroundColor: "#27293D" }}>
        <Text>Review</Text>
      </View>
    );
  }
}
