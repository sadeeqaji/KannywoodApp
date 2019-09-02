import {createSwitchNavigator, createAppContainer} from "react-navigation";
import AuthStack from "../Navigator/AuthStack";
import MoviesNav from "../Navigator/MoviesNav"

const AppSwitchNavigator = createSwitchNavigator({
    
    Auth: AuthStack,
    MoviesNav: MoviesNav,
})

export default createAppContainer(AppSwitchNavigator)