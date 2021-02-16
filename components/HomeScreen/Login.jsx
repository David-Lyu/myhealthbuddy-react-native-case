import React, { useState } from "react";
import { View, Button, StyleSheet, Text, KeyBoard } from "react-native";
import InputText from "../reuseable/InputText";
import Colors from "../../styles/Colors";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View onPress={() => Keyboard.dismiss()}>
      <View>
        <View>
          <Text>Email</Text>
          <InputText placeholder="email@email.com" />
        </View>
        <View>
          <Text>Password</Text>
          <InputText placeholder="**********" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" />
        <View style={styles.spacer} />
        <Button
          color={Colors.secondary}
          title="Register"
          onPress={() => props.register(1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  spacer: {
    marginHorizontal: 3,
  },
});

export default Login;
