import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Download from "./Download";

export default class Activity extends React.Component {
  static navigationOptions = {
    headerTansparent: false,
    title: "Downloads"
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Download />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28293D"
  }
});
