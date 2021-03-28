import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Colors from "../../styles/Colors";

const BackgroundImage = (props) => {
  return (
    <ImageBackground
      source={require("../../assets/healthbuddybear.png")}
      style={styles.image}>
      <View style={styles.backgroundOverlay}>{props.children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    color: Colors.accents,
    flex: 1,
    width: "100%",
    resizeMode: "center",
    justifyContent: "center"
  },
  backgroundOverlay: {
    backgroundColor: "rgba(23,23,23,0.5)",
    flex: 1
  }
});

export default BackgroundImage;
