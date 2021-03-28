import { StyleSheet } from "react-native";

const GridStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    justifyContent: "flex-start"
  },
  row: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1
  }
});

export default GridStyles;
