import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { AsyncStorage } from "react-native";
import {withNavigation} from "react-navigation";
import {connect} from "react-redux";
import ProfileAction from '../../Actions/ProfileAction';
import CustomModal from "../../components/modal";
import Avater from "../../assets/profileAvi.png";

const width = Dimensions.get("window").width * 0.7;

class Profile extends Component {
  state = {
    namemodalVisible: "modalVisible",
    namemodalEmail: "modalEmail",
    namemodalPassword: "modalPassword",
    text: "PlaceHolder",
    modalEmail: false,
    text2: "Placeholder",
    modalPassword: false,
    text3: "Placeholder",
    visible: false,
    modalname: ""
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {}
  };

  _Logout = async () => {
    const value = await AsyncStorage.removeItem("token");
    this.props.navigation.navigate("Login")
    console.log("Logout");
  };

  _showmodal = name => {
    this.setState({ visible: true, modalname: name });
  };

  cancelModal = name => {
    this.setState({ visibile: false, modalname: name });
  };

  changeText = text => {
    this.setState({ text: text });
  };



  render() {
    console.log("i want the profile ", this.props.Profile)
    const {name} = this.props.Profile.Profile
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={Avater}
            style={{
              width: 162,
              height: 162,
              borderRadius: 248.26,
              alignSelf: "center",
              top: "30%"
            }}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              top: "20%",
              paddingHorizontal: 30,
              justifyContent: "center"
            }}
          >
            <View style={{ width: "90%" }}>
              <Text
                style={{
                  textAlign: "center",

                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "800",
                  fontStyle: "normal"
                }}
              >
                {name}
              </Text>
            </View>
            <View style={{ width: "10%" }}>
              <CustomModal
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                Textstyle={{}}
                ViewStyle={{}}
                placeholder={this.state.placeholder}
                setModal={() => this._showmodal("m1")}
                name={"m1"}
                visibilitystatus={this.state.visible}
                nameText={"m1"}
                changeText={this.changeText}
                icon={"true"}
                value={this.state.namemodalVisible}
                cancelModal={() => this.cancelModal()}
                openname={this.state.modalname}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            top: "15%",
            margin: 20,
            padding: 45
          }}
        >
          <View>
            <Text
              style={{
                fontStyle: "normal",
                fontSize: 12,
                fontWeight: "600",
                color: "#C4C4C4",
                lineHeight: 16
              }}
            >
              Total Downloaded
            </Text>
            <Text
              style={{
                fontStyle: "normal",
                fontSize: 12,
                fontWeight: "600",
                color: "#FFFFFF",
                textAlign: "center",
                lineHeight: 16
              }}
            >
              450
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontStyle: "normal",
                fontSize: 12,
                fontWeight: "600",
                color: "#C4C4C4",
                lineHeight: 16
              }}
            >
              Total Stream
            </Text>
            <Text
              style={{
                fontStyle: "normal",
                fontSize: 12,
                fontWeight: "600",
                color: "#FFFFFF",
                textAlign: "center",
                lineHeight: 16
              }}
            >
              45
            </Text>
          </View>
        </View>
        <View
          style={{
            top: "2%",
            borderBottomColor: "#C4C4C4",
            borderBottomWidth: 0.9
          }}
        />
        <ScrollView style={{ padding: 30 }}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Download")}
            >
              <Text style={styles.Text2}>Bookmarked Movies</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this._retrieveData}>
              <Text style={styles.Text2}>Analytics</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: "100%", flex: 1 }}>
            <View
              style={{
                width: "100%",
                flex: 1,
                // position: "absolute",
                // marginHorizontal: width
              }}
            >
              <CustomModal
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                Textstyle={{}}
                ViewStyle={{}}
                placeholder={this.state.placeholder}
                nameText={this.state.text2}
                changeText={this.changeText}
                // icon={"false"}
                word = {"Change Email"}

                value={this.state.namemodalEmail}
                setModal={() => this._showmodal("m2")}
                name="m2"
                visibilitystatus={this.state.visible}
                cancelModal={() => this.cancelModal()}
                openname={this.state.modalname}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", width: "100%", flex: 1 }}>
            
            <View
              style={{
                width: "100%",
                flex: 1,
               // position: "absolute",
                // marginHorizontal: width
              }}
            >
              <CustomModal
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                Textstyle={{}}
                ViewStyle={{}}
                word = {"Change Password"}
                placeholder={this.state.placeholder}
                nameText={this.state.text2}
                changeText={this.changeText}
                // icon={"false"}
                value={this.state.namemodalEmail}
                setModal={() => this._showmodal("m3")}
                name={"m3"}
                visibilitystatus={this.state.visible}
                cancelModal={() => this.cancelModal()}
                openname={this.state.modalname}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={this._Logout}>
              <Text style={styles.Text2}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28293D"
  },
  Text2: {
    lineHeight: 40,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal"
  }
});
const mapStateToProps = (state) =>{
  return{Profile : state.Profile}
}
export default connect(mapStateToProps)(withNavigation(Profile));
