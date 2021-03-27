import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { useLocation } from "react-router";
import Card from "../reuseable/Card";
import Login from "./Login";
import Register from "./Register";

const Home = (props) => {
  const [renderChoice, setRenderChoice] = useState(0);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.homeContainer}>
        <Card>
          {!renderChoice && <Login register={setRenderChoice} />}
          {renderChoice === 1 && <Register login={setRenderChoice} />}
          {/* {renderChoice === 2 && <Suggestions/>} */}
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: "center",
    flex: 1
  }
});

export default Home;
