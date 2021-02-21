import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  KeyBoard,
  TouchableWithoutFeedback
} from "react-native";
import InputText from "../reuseable/InputText";
import Colors from "../../styles/Colors";
import { StateContext, DispatchContext } from "../../context";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassHidden, setIsPassHidden] = useState(true);
  const textType = {
    email: "email",
    password: "password"
  };

  const handleInputChange = (inputType) => {
    return function (e) {
      if (inputType === textType.email) setEmail(e.nativeEvent.text);
      if (inputType === textType.password) setPassword(e.nativeEvent.text);
    };
  };

  const handleLoginSubmit = (stuff) => {
    return function (e) {
      //stuff
    };
  };

  return (
    <View>
      <View comment="body for input">
        <View>
          <Text>Email</Text>
          <InputText
            keyboardType="email-address"
            placeholder="email@email.com"
            onChange={handleInputChange(textType.email)}
            value={email}
          />
        </View>
        <View>
          <Text>Password</Text>
          <View style={styles.displayPassContainer}>
            <InputText
              placeholder="**********"
              secureTextEntry={isPassHidden}
              onChange={handleInputChange(textType.password)}
              value={password}
            />
            <View style={styles.displayPass}>
              <Button
                title="SHOW"
                onPress={() => setIsPassHidden(!isPassHidden)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleLoginSubmit()} />
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
    justifyContent: "center"
  },
  spacer: {
    marginHorizontal: 3
  },
  displayPassContainer: {
    position: "relative",
    justifyContent: "center",
    alignContent: "space-between"
  },
  displayPass: {
    position: "absolute",
    right: 0
  }
});

export default Login;
