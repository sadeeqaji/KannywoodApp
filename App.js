import React from 'react';
import {
 StyleSheet, View, StatusBar, Image 
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import SwitchNavigator from "./Navigator/SwitchNavigator";
import { store, persistor } from "./store";

// import SplashScreen from "./screens/SplashScreen"

const App = () => (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate
          loading={
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
          }
          persistor={persistor}
        >
          <StatusBar hidden={true} />
          <SwitchNavigator />
        </PersistGate>
      </Provider>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27293D',
    // justifyContent: 'center',
  },
});

export default App;
