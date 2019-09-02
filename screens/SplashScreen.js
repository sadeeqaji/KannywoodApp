import React from "react";
import {View, Image, StyleSheet} from "react-native";



const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <Image source={require("../assets/logo1.png") } />
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    logo:{
        width: 188,
        height: 106,
        justifyContent: 'center'
    }
})

export default SplashScreen