const INITIAL_STATE = {
    Auth: "",
    Error:'',
    Success:"",
    token:null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'Email_and_Password':
        return { ...state, Auth: action.payload };
      case 'LOGIN_USER_FAIL':
        return { ...state, Error:"Authentication Failed", password: '' };
      case 'LOGIN_USER_SUCCESS':
        return{ ...state, Success: "Successfull", token:action.payload}
      default:      
        return state;
    }
};
  