import React from 'react';
import {
 StyleSheet, View, StatusBar, Image 
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import SwitchNavigator from "./Navigator/SwitchNavigator";
import { store, persistor } from "./store";
import RootScreen from './RootScreen';
import AsyncStorage from '@react-native-community/async-storage'

// import SplashScreen from "./screens/SplashScreen"


const App = () =>{
    return(
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate
          loading={
            
            <RootScreen />
          }
          persistor={persistor}
        >
          <StatusBar hidden={true} />
          <SwitchNavigator />
        </PersistGate>
      </Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27293D',
    // justifyContent: 'center',
  },
});

export default App;
