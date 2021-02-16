import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import GridStyles from "../../styles/grid";

const Card = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View {...props.attr} style={styles.card}>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    shadowColor: "white",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 5,
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
