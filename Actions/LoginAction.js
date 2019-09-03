import Axios from "axios";

// import { AsyncStorage } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'




export const LoginAction = ({ email, password }) => {
  return dispatch => {
      return new Promise((resolve, reject) => {
        Axios.post("http://kannywoodtv.live/api/user/login", {
            email,
            password
          })
            .then(result => {
              dispatch({ type: "LOGIN_USER_SUCCESS", payload: result.data });
              if (result) {
                AsyncStorage.setItem('token', result.data);

                return resolve ({success: true});
              }
            })
            .catch(err => {
              dispatch({ type: "LOGIN_USER_FAIL" });
              return reject({message: "something went wrong"})
            });
      })
   
  };
};
