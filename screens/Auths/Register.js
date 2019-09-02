import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Form, Button } from "native-base";

const logo = require("../../assets/logo1.png");

export default class Register extends Component {
  state = {
    checked: false
  };

  checkedbox = () => {
    if (!this.state.checked) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.FormContainer}>
          <Image source={logo} style={{ width: 188, height: 106, margin: 5 }} />
          <Form>
            <View>
              <TextInput
                placeholder="Name"
                style={styles.InputStyle}
                placeholderTextColor="#FFFFFF"
                returnKeyLabel="next"
                keyboardType={"default"}
              />
              <TextInput
                placeholder="Email"
                style={styles.InputStyle}
                placeholderTextColor="#FFFFFF"
                textContentType="emailAddress"
                keyboardType={"email-address"}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                style={styles.InputStyle}
                placeholderTextColor="#FFFFFF"
                textContentType="password"
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Confirm password"
                style={styles.InputStyle}
                placeholderTextColor="#FFFFFF"
                textContentType="password"
              />
              <CheckBox
                title="I accept all Terms and Conditions"
                checked={this.state.checked}
                checkedColor="#01C851"
                style={{ margin: -10 }}
                onPress={this.checkedbox}
              />
            </View>
          </Form>
          <Button style={styles.ButtonSignUp}>
            <Text style={styles.ButtonSignUpText}> Sign Up </Text>
          </Button>
          <TouchableOpacity
            onPress={() => {
              console.log("pressed");
            }}
          >
            <Text style={styles.ForgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.DontHaveAccount}>
              Already have an account?{" "}
              <Text style={{ color: "#01C851" }}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#27293D"
  },
  FormContainer: {
    flex: 1,
    alignItems: "center"
  },
  InputStyle: {
    width: 276,
    height: 58,
    backgroundColor: "#2F2F39",
    borderRadius: 10,
    color: "#FFFFFF",
    margin: 5,
    padding: 15
  },
  ButtonSignUp: {
    width: 183.73,
    height: 53,
    backgroundColor: "#01C851",
    borderRadius: 10,
    margin: 15
  },
  ButtonSignUpText: {
    flex: 1,
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal"
  },
  ForgotPassword: {
    color: "#FFFFFF",
    fontWeight: "300",
    fontSize: 12,
    fontStyle: "normal",
    margin: 10
  },
  DontHaveAccount: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontSize: 13,
    fontWeight: "normal",
    margin: 5
  }
});
