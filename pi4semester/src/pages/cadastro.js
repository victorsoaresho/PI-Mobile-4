import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default class Cadastrar extends Component {
  state = {
    nome: "",
    email: "",
    password: "",
  };

  handleCadastro = async () => {
    const { email, password } = this.state;
    if (!email || !password) {
      alert("Preencha todos os campos!");
      return;
    }
    const user = {
      email,
      password,
    };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    alert("Usuário cadastrado com sucesso!");
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Cadastre-se</Text>
        <TextInput
          style={styles.input}
          placeholder="Como gostaria de ser chamado?"
          value={this.state.nome}
          onChangeText={(nome) => this.setState({ nome })}
        />
        <TextInput
          style={styles.input}
          placeholder="Qual seu melhor e-mail?"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "#004983",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: "30%",
    marginHorizontal: 5
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});