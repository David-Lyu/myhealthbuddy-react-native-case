import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const InputText = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomColor: Colors.accents,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default InputText;
