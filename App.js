import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useReducer } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView
} from "react-native";
import { NativeRouter, Route, Link, Redirect } from "react-router-native";
import BackgroundImage from "./components/background-image/BackgroundImage";
import GridStyles from "./styles/grid";
import Colors from "./styles/Colors";
import Home from "./components/HomeScreen/Home";
import {
  StateContext,
  DispatchContext,
  initialState,
  ourReducer
} from "./context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./components/HomeScreen/Login";
import Register from "./components/HomeScreen/Register";

export default function App() {
  //look at context/index.js for initial state and everything
  const [state, dispatch] = useReducer(ourReducer, initialState);

  //working on useEffect and token to render before login page
  useEffect(() => {
    async function getToken() {
      const setter = await AsyncStorage.getItem("MyHealthBuddyToken");
      if (setter) dispatch({ type: "token", value: setter });
      console.log(setter, "already logged In");
    }
    getToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"light"} />
      {/* uses useContext from context/index.js and adds the state and dispatch value from useReducer aka Redux*/}
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <View style={[GridStyles.container]}>
            <TouchableWithoutFeedback
              onPress={() => {
                Keyboard.dismiss();
              }}>
              <BackgroundImage>
                {/* Will be changing react router native to navigation next week */}
                <NativeRouter>
                  {/* <Route exact path="/">
                    {state.token ? <Redirect to="user/home" /> : <Home />}
                  </Route>
                  <Route path="/user/home" component={Register} /> */}
                  <Route path="/" component={Home} />
                </NativeRouter>
              </BackgroundImage>
            </TouchableWithoutFeedback>
          </View>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: "center"
  }
});
