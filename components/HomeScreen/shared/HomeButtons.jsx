import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../../../styles/Colors";

const HomeButtons = (props) => {
  //what props need to be passed in:
  //titleChoice, titleSubmit //onPressSubmit, renderChoice // [disabled?]
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={props.titleSubmit}
        color={Colors.success}
        onPress={props.onPressSubmit}
        disabled={props.disabled ?? false}
      />
      <View style={styles.spacer} />
      <Button title={props.titleChoice} onPress={props.renderChoice} />
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
  }
});

export default HomeButtons;
