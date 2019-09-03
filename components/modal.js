import React from "react";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomModal = ({
  animationType,
  visible,
  transparent,
  ViewStyle,
  TextStyle,
  setModal,
  nameText,
  changeText,
  icon,
  visibilitystatus,
  name,
  openname,
  cancelModal,
  word
}) => {
  console.log(name)
  return (
    <View style={{ width: "100%", ...ViewStyle }}>
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={visibilitystatus === true && name === openname ? true : false}
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
                borderWidth: 1,
                ...TextStyle
              }}
              onChangeText={text => changeText(text)}
              value={nameText}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 10
              }}
            >
              <View style>
                <TouchableOpacity onPress={cancelModal}>
                  <Text style={{ marginHorizontal: 10 }}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                // onPress={() => {
                //     setModal(true, value)
                // }}
                >
                  <Text>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={name => {
          setModal();
        }}
      >
        {icon && (
          <Icon
            name="md-create"
            size={30}
            color="#CCC4C4"
            style={{ width: "100%" }}
          />
        )}
        {word && (
           <Text style={styles.Text2}>{word}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles={
  Text2:{
    lineHeight: 40,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal"
  }
}

export default CustomModal;
