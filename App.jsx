import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";
import CreateTaskScreen from "./src/screens/CreateTaskScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    RobotoLight: require("./src/assets/fonts/Roboto-Light.ttf"),
    RobotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
  });
  const [login, setLogin] = useState(false);

  if (!loaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      {login ? <CreateTaskScreen /> : <LoginScreen setLogin={setLogin} />}
      <SafeAreaView style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});
