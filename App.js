import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import BackgroundImage from "./components/background-image/BackgroundImage";
import GridStyles from "./styles/grid";
import Colors from "./styles/Colors";
import Home from "./components/HomeScreen/Home";
import {
  StateContext,
  DispatchContext,
  initialState,
  ourReducer,
} from "./context";

export default function App() {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    console.log(state.user);
  }, []);
  return (
    <StateContext.Provider value={initialState}>
      <DispatchContext.Provider value={setState}>
        <View style={[styles.container, GridStyles.container]}>
          <StatusBar backgroundColor="white" barStyle="light-content" />
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <BackgroundImage>
              <NativeRouter>
                <Route path="/" component={Home} />
              </NativeRouter>
            </BackgroundImage>
          </TouchableWithoutFeedback>
        </View>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  statusBar: {
    backgroundColor: "white",
  },
});