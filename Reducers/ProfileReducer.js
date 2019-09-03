
const Initial_State = {
    Profile: ""
}

const ProfileReducer = (state = Initial_State, action)=>{
    switch(action.type){

        case "Profile":
            return {...state, Profile: action.payload}
        default:
            return state;
    }

}

export default ProfileReducer;