import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import { Form, Button } from "native-base";

import { connect } from "react-redux";
import { LoginAction } from "../../Actions/LoginAction";

const logo = require("../../assets/logo1.png");

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      Loading: "false"
    };
  }
  static navigationOptions = {
    header: null
  };

  onSubmit = async () => {
    const { email, password } = this.state;
    await this.props
      .LoginAction({ email, password })
      .then(res => {
        if (res.success) {
          this.props.navigation.navigate("Home");
        }
      })
      .catch(error => {
        this.setState({ password: "" });
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.Container}>
        <View style={styles.FormContainer}>
          <Image source={logo} style={{ width: 188, height: 106 }} />
          <Form>
            <View>
              <TextInput
                placeholder="Email"
                style={styles.InputStyle}
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({ email: text })}
                value={email}
                name={email}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                style={styles.InputStyle}
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({ password: text })}
                value={password}
                name={password}
              />
            </View>
          </Form>
          <Button style={styles.ButtonSignIn} onPress={this.onSubmit}>
            <Text style={styles.ButtonSigninText}> Sign In </Text>
          </Button>
          <TouchableOpacity
            onPress={() => {
              this.props.LoginAction("lawalgoodness14@gmail.com hope123");
            }}
          >
            <Text style={styles.ForgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigate}>
            <Text style={styles.DontHaveAccount}>
              Don't have an account?{" "}
              <Text style={{ color: "#01C851" }}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#27293D"
  },
  FormContainer: {
    flex: 1,
    alignItems: "center",
    top: "15%"
  },
  InputStyle: {
    width: 276,
    height: 58,
    backgroundColor: "#2F2F39",
    borderRadius: 10,
    color: "#FFFFFF",
    margin: 10,
    padding: 15
  },
  ButtonSignIn: {
    width: 183.73,
    height: 53,
    backgroundColor: "#01C851",
    borderRadius: 10,
    margin: 15
  },
  ButtonSigninText: {
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
    margin: 30
  },
  DontHaveAccount: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontSize: 13,
    fontWeight: "normal"
  }
});

const mapStateToProps = state => {
  console.log("1", state);
  return {
    Auth: state.Auth
  };
};

export default connect(
  mapStateToProps,
  { LoginAction }
)(Login);
