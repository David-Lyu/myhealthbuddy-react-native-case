import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import InputText from "../reuseable/InputText";

const Register = (props) => {
  //initial state
  const initInputState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
  };

  //state
  const [inputForm, setInputForm] = useState(initInputState);

  const handleFormInputChange = (inputTag) => {
    const newInputState = { ...inputForm };
    console.log(newInputState);
    return function (textVal) {
      newInputState[inputTag] = textVal;
      setInputForm(newInputState);
    };
  };
 
  return (
    <View>
      <Text>Fill out the form below</Text>
      <InputText
        placeholder="First Name"
        onChange={handleFormInputChange("firstName")}
        value={inputForm.firstName}
      />
      <InputText
        placeholder="Last Name"
        onChange={handleFormInputChange("lastName")}
        value={inputForm.lastName}
      />
      <InputText
        placeholder="Email"
        onChange={handleFormInputChange("email")}
        value={inputForm.email}
      />
      <InputText
        placeholder="Password"
        onChange={handleFormInputChange("password")}
        value={inputForm.password}
      />
      <InputText
        placeholder="Confirm Password"
        onChange={handleFormInputChange("confirmPass")}
        value={inputForm.confirmPass}
      />
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
