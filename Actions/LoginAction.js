import Axios from "axios";
import decode from "jwt-decode";


import { AsyncStorage } from "react-native";




export const LoginAction = ({ email, password }) => {
  return dispatch => {
      return new Promise((resolve, reject) => {
        Axios.post("http://kannywoodtv.live/api/user/login", {
            email,
            password
          })
            .then(result => {
              const id = decode(result.data);
              dispatch({ type: "LOGIN_USER_SUCCESS", payload: id });
              Axios.get(`http://kannywoodtv.live/api/user/profile/5cc1f54e9ae8ee5ec544d051`)
              .then(result =>{
                console.log(result.data);
                dispatch({type: "Profile", payload: result.data})
              })
              .catch(error=> console.log(error))
              if (result) {
                // AsyncStorage.setItem('token', result.data);
                
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
