import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../reuseable/Card";
// import Suggestions from "./Suggestions";
import Login from "./Login";
import Register from "./Register";

const Home = (props) => {
  const [renderChoice, setRenderChoice] = useState(0);
  return (
    <Card>
      <View style={styles.homeContainer}>
        {!renderChoice && <Login register={setRenderChoice} />}
        {renderChoice === 1 && <Register login={setRenderChoice} />}
        {/* {renderChoice === 2 && <Suggestions/>} */}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: "center",
  },
});

export default Home;
