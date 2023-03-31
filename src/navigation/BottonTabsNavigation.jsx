import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screen/Home'
import MangaDetailsScreen from "../screen/MangaDetails";

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Manga" component={MangaDetailsScreen} />
        </Tab.Navigator>
    );
}