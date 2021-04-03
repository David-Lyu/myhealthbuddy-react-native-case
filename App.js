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

export default function App() {
  const [state, dispatch] = useReducer(ourReducer, initialState);
  //working on useEffect and token to render before login page
  useEffect(() => {
    async function getToken() {
      const setter = await AsyncStorage.getItem("MyHealthBuddyToken");
      console.log(setter);
    }
    console.log("inside app js first render");
    console.log(getToken());
    console.log("end of app js first render");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"light"} />
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <View style={[GridStyles.container]}>
            <TouchableWithoutFeedback
              onPress={() => {
                console.log("clicked");
                Keyboard.dismiss();
              }}>
              <BackgroundImage>
                <NativeRouter>
                  {/* not sure what we want to do here. Do we want a redirect or do we want conditional rendering */}
                  {/* <Route>{state.user ? : <Redirect to=""/> : <Home/>}</Route>*/}
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
