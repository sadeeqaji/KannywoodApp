import React from "react";
import {
  FlatList,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";

import { Header, Tab, Tabs, TabHeading, Icon } from "native-base";

import Series from "./Series";
import MoviesContainer from "../../components/MovieContainer";

var { width, height } = Dimensions.get("window");
width = Dimensions * 0.9;

export default class Movies extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "#01C851" }}>
          <Tab
            heading="Popular"
            tabStyle={{ backgroundColor: "#27293D" }}
            textStyle={{
              color: "#fff",
              fontWeight: "normal",
              fontStyle: "normal",
              fontSize: 16
            }}
            activeTabStyle={{ backgroundColor: "#27293D" }}
            activeTextStyle={{
              color: "#01C851",
              fontWeight: "normal",
              fontStyle: "normal",
              fontSize: 16
            }}
          >
            <MoviesContainer />
          </Tab>
          <Tab
            heading="Series"
            tabStyle={{ backgroundColor: "#27293D" }}
            textStyle={{
              color: "#fff",
              fontWeight: "normal",
              fontStyle: "normal",
              fontSize: 16
            }}
            activeTabStyle={{ backgroundColor: "#27293D" }}
            activeTextStyle={{
              color: "#01C851",
              fontWeight: "normal",
              fontStyle: "normal",
              fontSize: 16
            }}
          >
            <Series />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27293D"
  }
});