import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import styles from "./components/styles"
import stySheet from "./components/stySheet";
import TextinputEX from "./components/TextinpuEX";
import Cafe from "./components/Cafe";

const App = () => {

  const showData = () => {
    alert("click Button")
  }

  return (
    <View>
      {/* <Text style={stySheet.title}>React native</Text> */}
      <Logo/>
      <Button
      onPress={showData}
        title="Just a Button"
      />
      {/* <TextinputEX/> */}
      <Cafe/>
      <Cafe/>
      <Cafe/>
    </View>
  );
};

export default App;
