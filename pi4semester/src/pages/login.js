import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = await AsyncStorage.getItem("user")
    if(!user){
      alert("Nenhum usuário cadastrado!")
      return
    }
    const userJson = JSON.parse(user)
    if(userJson.email === email && userJson.password === password){
      navigation.navigate("Main")
    }else{
      alert("E-mail ou senha inválidos!")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Faça login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  message: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: 400,
  },
  input: {
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "#0079C2",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: "30%",
    marginHorizontal: 5
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 17
  },
});

export default Login;