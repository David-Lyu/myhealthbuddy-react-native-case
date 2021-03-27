import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import InputText from "../reuseable/InputText";
import { StateContext, DispatchContext } from "../../context";
import HomeButtons from "./shared/HomeButtons";

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

  //state handler
  // const StateContext;

  const handleFormInputChange = (inputTag) => {
    return function (textVal) {
      const newInputState = { ...inputForm };
      newInputState[inputTag] = textVal;
      setInputForm(newInputState);
    };
  };

  useEffect(() => {
    const { confirmPass, password } = inputForm;
    if (inputForm.password && confirmPass === password) setDoesPassMatch(true);
    if (inputForm.confirmPass !== inputForm.password) setDoesPassMatch(false);
  }, [inputForm.confirmPass]);

  /**
   * This method checks to verify password.
   * @returns a component that matches the error.
   */
  const renderPassVerification = () => {
    if (inputForm.password === "") return null;
    // if (inputForm.password.includes())
    if (doesPassMatch)
      return <Text style={{ color: Colors.success }}> Password matches </Text>;
    if (!doesPassMatch)
      return (
        <Text style={{ color: Colors.secondary }}>Password does not match</Text>
      );
  };

  const handleRegisterUser = () => {
    // check to see if there is any fields black
    if (!doesPassMatch) return;
    for (const key in inputForm) {
      console.log("field is empty");
      if (key === undefined) return;
    }

    const { firstName, lastName, email, password } = inputForm;

    //need to send axios call
  };

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
      {/* <View style={styles.buttonContainer}>
        <Button
          title="Confirm"
          onPress={handleRegisterUser}
          disabled={!doesPassMatch}
        />
        <View style={styles.spacer} />
        <Button
          color={Colors.secondary}
          title="Login"
          onPress={() => props.login(0)}
        />
      </View> */}
      <HomeButtons
        titleSubmit="Confirm"
        titleChoice="Login"
        onPressSubmit={handleRegisterUser}
        renderChoice={() => {
          props.login(0);
        }}
        disabled={!doesPassMatch}
      />
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
