import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  KeyBoard,
  TouchableWithoutFeedback
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import InputText from "../reuseable/InputText";
import Colors from "../../styles/Colors";
import HomeButtons from "./shared/HomeButtons";
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
        if (data.error) {
          throw new Error("Wrong Pass");
        }
        const setter = AsyncStorage.setItem(
          "MyHealthBuddyToken",
          JSON.stringify(data)
        );
      })
      .catch((err) => console.error(err + "error!"));
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
      <HomeButtons
        onPressSubmit={handleLoginSubmit}
        renderChoice={() => {
          props.register(1);
        }}
        titleSubmit="Submit"
        titleChoice="Register"
      />
      <View style={{ marginVertical: 3 }}>
        <Button
          title="didRegister"
          onPress={async () => {
            const jsonVal = await AsyncStorage.getItem("MyHealthBuddyToken");
            jsonVal != null ? JSON.parse(jsonVal) : null;
            console.log(jsonVal);
          }}
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
