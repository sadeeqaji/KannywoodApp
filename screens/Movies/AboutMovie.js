import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default class AboutMovie extends React.Component {
  navigationOptions = {
    style: {
      backgroundColor: "#28293D"
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.TextContainer}>
          <Text style={styles.TextStyle}>
            <Text style={{ color: "#CCC4C4" }}>Length:</Text> 2 hour, 10min.
          </Text>
          <Text style={styles.TextStyle}>
            <Text style={{ color: "#CCC4C4" }}>Downloaded:</Text> 249times
          </Text>
          <Text style={styles.TextStyle}>
            <Text style={{ color: "#CCC4C4" }}>Stream:</Text> 300times
          </Text>
          <Text style={styles.TextStyle2}>
            <Text style={{ color: "#CCC4C4" }}>Synposis</Text>: Etiam numquam
            viverra blandit tristique, culpa mi repellat. Lectus rem hymenaeos
            convallis, nostra pharetra sapiente porta. Ullam euismod hendrerit
            laborum nascetur egestas, duis? Fugiat porro tempore quia, nobis
            cubilia quos faucibus laudantium! Ab! Corporis laboriosam tellus.
            Mus commodo magna, ullamco quisque? Facere, consectetuer senectus
            saepe! Volutpat litora gravida habitasse dolorem praesent nullam?
            Blanditiis porro aute inceptos, lorem aliqua, amet felis! Blandit
            habitant autem, vivamus integer? Platea nullam odit asperiores, et
            architecto nunc, eos iaculis sagittis ratione, accumsan magni
            impedit totam vivamus metus, accusantium, occaecati. Libero quasi
            fugiat sint, cupidatat inceptos, libero taciti mollitia. Ullamco
            aspernatur, metus excepteur laborum eleifend! Sollicitudin.
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
    backgroundColor: "#27293D"
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
