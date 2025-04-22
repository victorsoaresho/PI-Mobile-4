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
                    title:"Wellcome",
                    headerLeft: null,
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#7159c1",
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