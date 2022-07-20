import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { color } from "../common/constants/colors";
import { useState } from "react";

const LoginScreen = (props) => {
  const { setLogin } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (email) => setEmail(email);
  const changePassword = (password) => setPassword(password);

  const buildLogin = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View
          style={{ ...styles.topDesign, backgroundColor: color.primary }}
        ></View>
        <View
          style={{ ...styles.topDesign, backgroundColor: color.secundary }}
        ></View>
        <View
          style={{ ...styles.topDesign, backgroundColor: color.primary }}
        ></View>
        <View
          style={{ ...styles.topDesign, backgroundColor: color.secundary }}
        ></View>
        <View
          style={{ ...styles.topDesign, backgroundColor: color.primary }}
        ></View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.welcome}>Bienvenido</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={color.primary}
          onChangeText={changeEmail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={color.primary}
          underlineColorAndroid="transparent"
          onChangeText={changePassword}
          value={password}
        />
        <Button
          title="Login"
          onPress={() => setLogin(true)}
          disabled={!email || !password}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    flexDirection: "row",
    height: 200,
  },
  topDesign: {
    backgroundColor: "blue",
    height: 200,
    width: "20%",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  formContainer: {
    marginTop: 210,
    marginHorizontal: 5,
    padding: 20,
  },
  welcome: {
    fontSize: 30,
    fontFamily: "RobotoBold",
    color: color.primary,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    fontFamily: "RobotoLight",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default LoginScreen;
