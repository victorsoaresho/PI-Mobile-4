import { React } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

const Wellcome = () => {
    const navigation = useNavigation();
    

    const goToLogin = () => {
        navigation.navigate("Login");
    }

    const goToCadastro = () => {
        navigation.navigate("Cadastro");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                Seja bem vindo ao portal do clima!
            </Text>

            <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.buttonLogin} onPress={goToLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCadastro} onPress={goToCadastro}>
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
      },
      message: {
        color: "#ffffff",
        fontWeight: "400",
        fontSize: 23
      },
      buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginTop: 20,
      },
      buttonLogin: {
        backgroundColor: "#0079C2",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        flex: 1,
        marginHorizontal: 5,
      },
      buttonCadastro: {
        backgroundColor: "#004983",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        flex: 1,
        marginHorizontal: 5,
      },
      buttonText: {
        color: "#FFFFFF",
        fontWeight: "400",
        fontSize: 17
      },
})

export default Wellcome;