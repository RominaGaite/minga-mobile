import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screen/Home'
import MangaDetailsScreen from "../screen/MangaDetails";
import MangasViewScreen from "../screen/Mangas";
import RegisterScreen from "../screen/Register";
import LoginScreen from "../screen/Login"

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name="MangaDetails" options={{ headerShown: false }} component={MangaDetailsScreen} />
            <Tab.Screen name="Mangas"options={{ headerShown: false }} component={MangasViewScreen} />
            <Tab.Screen name="Register"options={{ headerShown: false }} component={RegisterScreen} />
            <Tab.Screen name="Login"options={{ headerShown: false }} component={LoginScreen} />
        </Tab.Navigator>
    );
}