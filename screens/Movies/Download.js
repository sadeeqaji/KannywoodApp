import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ProgressBarAndroid,
  ScrollView
} from "react-native";

import { Header } from "native-base";

const poster = require("../../assets/posters/IMG1.jpg");

export default class Download extends React.Component {
  
  render() {
    return (
      <View style={styles.Downloadcontainer}>
        <ScrollView>
          <View style={styles.posterAndProgressBarContainer}>
            <View style={styles.PosterContainer}>
              <Image
                source={poster}
                style={{ width: 65.07, height: 96.69, borderRadius: 5 }}
              />
            </View>
            <View style={styles.ProgressBarContainer}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                Danka Ko Dana
              </Text>
              <ProgressBarAndroid
                color="#CC1D1D"
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                animating={true}
              />
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                50%
              </Text>
            </View>
          </View>
          <View style={styles.posterAndProgressBarContainer}>
            <View style={styles.PosterContainer}>
              <Image
                source={poster}
                style={{ width: 65.07, height: 96.69, borderRadius: 5 }}
              />
            </View>
            <View style={styles.ProgressBarContainer}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                Danka Ko Dana
              </Text>
              <ProgressBarAndroid
                color="#CC1D1D"
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                animating={true}
              />
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                50%
              </Text>
            </View>
          </View>
          <View style={styles.posterAndProgressBarContainer}>
            <View style={styles.PosterContainer}>
              <Image
                source={poster}
                style={{ width: 65.07, height: 96.69, borderRadius: 5 }}
              />
            </View>
            <View style={styles.ProgressBarContainer}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                Danka Ko Dana
              </Text>
              <ProgressBarAndroid
                color="#CC1D1D"
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                animating={true}
              />
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                50%
              </Text>
            </View>
          </View>
          <View style={styles.posterAndProgressBarContainer}>
            <View style={styles.PosterContainer}>
              <Image
                source={poster}
                style={{ width: 65.07, height: 96.69, borderRadius: 5 }}
              />
            </View>
            <View style={styles.ProgressBarContainer}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                Danka Ko Dana
              </Text>
              <ProgressBarAndroid
                color="#01C851"
                styleAttr="Horizontal"
                indeterminate={false}
                progress={1}
                animating={true}
              />
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                100%
              </Text>
            </View>
          </View>
          <View style={styles.posterAndProgressBarContainer}>
            <View style={styles.PosterContainer}>
              <Image
                source={poster}
                style={{ width: 65.07, height: 96.69, borderRadius: 5 }}
              />
            </View>
            <View style={styles.ProgressBarContainer}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                Danka Ko Dana
              </Text>
              <ProgressBarAndroid
                color="#01C851"
                styleAttr="Horizontal"
                indeterminate={false}
                progress={1}
                animating={true}
              />
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                100%
              </Text>
            </View>
          </View>
          <View style={styles.posterAndProgressBarContainer}>
            <View style={styles.PosterContainer}>
              <Image
                source={poster}
                style={{ width: 65.07, height: 96.69, borderRadius: 5 }}
              />
            </View>
            <View style={styles.ProgressBarContainer}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                Danka Ko Dana
              </Text>
              <ProgressBarAndroid
                color="#CC1D1D"
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                animating={true}
              />
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  color: "#C4C4C4"
                }}
              >
                50%
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Downloadcontainer: {
    flex: 1,
    backgroundColor: "#27293D"
  },
  posterAndProgressBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  PosterContainer: {
    margin: 5,
    padding: 15
  },
  ProgressBarContainer: {
    width: "70%",
    justifyContent: "center",
    margin: 5,
    padding: 15
  }
});
