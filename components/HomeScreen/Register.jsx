import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import InputText from "../reuseable/InputText";

const Register = (props) => {
  //initialize state
  const initInputState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: ""
  };

  //state
  const [inputForm, setInputForm] = useState(initInputState);
  const [isPassHidden, setIsPassHidden] = useState(true);
  const [doesPassMatch, setDoesPassMatch] = useState(false);

  const handleFormInputChange = (inputTag) => {
    return function (textVal) {
      const newInputState = { ...inputForm };
      newInputState[inputTag] = textVal;
      setInputForm(newInputState);
    };
  };

  /**
   * This method checks to verify password.
   */
  const renderPassVerification = () => {
    if (inputForm.password === "") return null;
    if (doesPassMatch)
      return <Text style={{ color: "green" }}> Password matches </Text>;
    if (!doesPassMatch)
      return (
        <Text style={{ color: Colors.secondary }}>Password does not match</Text>
      );
  };

  useEffect(() => {
    const { confirmPass, password } = inputForm;
    if (inputForm.password && confirmPass === password) setDoesPassMatch(true);
    if (inputForm.confirmPass !== inputForm.password) setDoesPassMatch(false);
  }, [inputForm.confirmPass]);

  return (
    <View>
      <Text>Fill out the form below</Text>
      <InputText
        placeholder="First Name"
        onChangeText={handleFormInputChange("firstName")}
        value={inputForm.firstName}
      />
      <InputText
        placeholder="Last Name"
        onChangeText={handleFormInputChange("lastName")}
        value={inputForm.lastName}
      />
      <InputText
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={handleFormInputChange("email")}
        value={inputForm.email}
      />
      <InputText
        placeholder="Password"
        onChangeText={handleFormInputChange("password")}
        secureTextEntry={isPassHidden}
        value={inputForm.password}
      />
      <InputText
        placeholder="Confirm Password"
        onChangeText={handleFormInputChange("confirmPass")}
        secureTextEntry={isPassHidden}
        value={inputForm.confirmPass}
      />

      {/* This renders the password verification */}
      {renderPassVerification()}

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
    marginTop: 6
  },
  spacer: {
    marginHorizontal: 3
  }
});

export default Register;
