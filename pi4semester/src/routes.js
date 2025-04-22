import { React } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Wellcome from "./pages/wellcome";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Wellcome"
                component={Wellcome}
                options={{
                    title: "",
                    headerLeft: null,
                    headerTitleAlign: "center",
                    headerTransparent: true, 
                    headerStyle: {
                      backgroundColor: "transparent", 
                      elevation: 0, 
                      shadowOpacity: 0, 
                    },
                    headerTitleStyle: {
                      color: "#fff",
                      fontWeight: "bold",
                    },
                  }}

            />
        </Stack.Navigator>
    )
}