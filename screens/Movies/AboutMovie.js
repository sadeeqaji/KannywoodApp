import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

var { width, height } = Dimensions.get("window");
export default class AboutMovie extends React.Component {
  navigationOptions = {
    style: {
      backgroundColor: "#28293D"
    }
  };
  render() {
    const Movie = this.props.details
    console.log(Movie)
    return (
      <ScrollView>
        <View style={[styles.TextContainer, ]}>
          <Text style={styles.TextStyle}>
            <Text style={{ color: "#CCC4C4" }}>Length:</Text> 2 hour, 10min.
          </Text>
          <Text style={styles.TextStyle}>
            <Text style={{ color: "#CCC4C4" }}>Downloaded:</Text> 249 times
          </Text>
          <Text style={styles.TextStyle}>
            <Text style={{ color: "#CCC4C4" }}>Stream:</Text> {Movie.views} times
          </Text>
          <Text style={styles.TextStyle2}>
            <Text style={{ color: "#CCC4C4" }}>Synposis</Text>: {Movie.description}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  TextContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#27293D", 
    // height: height
  },
  TextStyle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 11,
    color: "#FFFFFF",
    lineHeight: 25
  },
  TextStyle2: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 11,
    color: "#FFFFFF",
    lineHeight: 15
  }
});
