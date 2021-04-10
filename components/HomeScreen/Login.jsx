import React, { useState, useContext } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  KeyBoard,
  TouchableWithoutFeedback,
  CheckBox
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import InputText from "../reuseable/InputText";
import Colors from "../../styles/Colors";
import HomeButtons from "./shared/HomeButtons";
import { DispatchContext } from "../../context";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassHidden, setIsPassHidden] = useState(true);
  const [shouldSaveUser, setShouldSaveUser] = useState(false);
  const dispatch = useContext(DispatchContext);

  const textType = Object.freeze({
    email: "email",
    password: "password"
  });

  const handleInputChange = (inputType) => {
    return function (e) {
      if (inputType === textType.email) setEmail(e.nativeEvent.text);
      if (inputType === textType.password) setPassword(e.nativeEvent.text);
    };
  };

  const handleLoginSubmit = (e: nativeEvent) => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    };
    fetch("http://192.168.50.173:3000/api/v1/auth/login", config)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error("Wrong Pass");
        let payload = JSON.stringify(data);
        if (shouldSaveUser) {
          AsyncStorage.setItem("MyHealthBuddyToken", payload);
        }
        dispatch({ type: "token", payload: payload });
      })
      .catch((err) => console.error(err + ": could not log in"));
  };

  return (
    <View>
      <View>
        <Text>Email</Text>
        <InputText
          keyboardType="email-address"
          placeholder="email@email.com"
          onChange={handleInputChange(textType.email)}
          value={email}
        />
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
              title={isPassHidden ? "SHOW" : "HIDE"}
              onPress={() => setIsPassHidden(!isPassHidden)}
            />
          </View>
        </View>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={shouldSaveUser} onValueChange={setShouldSaveUser} />
        <View style={{ alignSelf: "center" }}>
          <Text>Remember me</Text>
        </View>
      </View>

      <HomeButtons
        onPressSubmit={handleLoginSubmit}
        renderChoice={() => {
          props.register(1);
        }}
        titleSubmit="Login"
        titleChoice="Register"
      />
      {/* THIS IS FOR DEBUGGING  on bottom of page*/}
      <DevButtons></DevButtons>
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
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 3
  }
});

function DevButtons() {
  return (
    <View style={{ marginVertical: 3 }}>
      <Button
        title="didRegister"
        onPress={async () => {
          const jsonVal = await AsyncStorage.getItem("MyHealthBuddyToken");
          jsonVal != null ? JSON.parse(jsonVal) : null;
          console.log(jsonVal);
        }}
      />
      <Button
        title="Unregister"
        onPress={async () => {
          const jsonVal = await AsyncStorage.removeItem("MyHealthBuddyToken");
          jsonVal != null ? JSON.parse(jsonVal) : null;
          console.log(jsonVal);
        }}
      />
    </View>
  );
}

export default Login;
