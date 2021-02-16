import React from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import InputText from "../reuseable/InputText";

const Register = (props) => {
  return (
    <View>
      <Text>Fill out the form below</Text>
      <InputText placeholder="First Name" />
      <InputText placeholder="Last Name" />
      <InputText placeholder="Email" />
      <InputText placeholder="Password" />
      <InputText placeholder="Confirm Password" />
      <View style={styles.buttonContainer}>
        <Button title="Confirm" />
        <View style={styles.spacer} />
        <Button
          color={Colors.secondary}
          title="Login"
          onPress={() => props.login(0)}
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

export default Register;
