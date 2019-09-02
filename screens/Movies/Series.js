import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TextInput
} from "react-native";

export default class Series extends React.Component {
  // const =() =>{}
  state = {
    modalVisible: false,
    text: "PlaceHolder"
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ width: "100%" }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              marginTop: 30,
              padding: 25,
              top: "50%",
              justifyContent: "center",
              width: "100%",
              height: 100,
              padding: 15,
              borderRadius: 10,
              backgroundColor: "#FFFFFF"
            }}
          >
            <View style={{ flex: 1, height: 40 }}>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "#FFFFFF",
                  borderBottomColor: "#01C851",
                  borderWidth: 1
                }}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  padding: 10
                }}
              >
                <View style>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text style={{ marginHorizontal: 10 }}>Cancel</Text>
                  </TouchableHighlight>
                </View>
                <View>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text>Save</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
