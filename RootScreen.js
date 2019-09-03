import React, { Component } from 'react';
import {
    StyleSheet, View, StatusBar, Image 
} from 'react-native';
import { connect } from 'react-redux'


const CheckAuthValidity = (token, navigator) => {
  var status = null;
  if (token !== ''  && token !== null) {
      console.log('let me see the token', token)
        
        try{
          const payload = decode(token);
          if(payload.exp < Date.now() / 1000 ){
            // return false;
            navigator.navigate("Login")
          }
          else{
            // return true
            navigator.navigate("Movies")
          }
        }
        catch(e){
          // return false;
          navigator.navigate("Login")
        }
        // return true 
        navigator.navigate("Movies")         
  }else{
    setTimeout(() => {
      navigator.navigate('Login');
    }, 5000);
  }
}

//TODO : Add timer to this function in that when it loads at first and it is checking time
//we could show that network is taking too long and maybe kindly check your internet connection
const RootScreen = (props) => {
   CheckAuthValidity(props.auth.token, props.navigation)
    // console.log("checking navigation", props)
    return(
        <View style={styles.container}>
            <Image
                source={require("./assets/logo1.png")}
                style={{
                  width: 188,
                  height: 106,
                  justifyContent: "center",
                  alignSelf: "center"
                }}
              />
        </View>
    )
}

const styles = {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  marginTop: 30,
  marginBottom: 20
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    // navState: state.navigation
  }
}
export default connect(mapStateToProps)(withNavigation(RootScreen));