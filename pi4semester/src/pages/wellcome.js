import { React } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

const Wellcome = () => {
    const goToLogin = () => {
        navigation.navigate("Login");
    }

    const goToCadastro = () => {
        navigation.navigate("Cadastro");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.menssage}>
                Seja bem vindo ao portal do clima!
            </Text>
            <TouchableOpacity style={styles.button} onPress={goToLogin}>
                <Text styke={style.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToCadastro}>
                <Text styke={style.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      },
      input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: "80%",
      },
      button: {
        backgroundColor: "#7159c1",
        borderRadius: 10,
        padding: 10,
        width: "80%",
        alignItems: "center",
        marginVertical: 5,
      },
      buttonText: {
        color: "#fff",
        fontWeight: "bold",
      },
})

export default Wellcome;