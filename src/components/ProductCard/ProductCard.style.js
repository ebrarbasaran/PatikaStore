import React from "react";
import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#efeff5",
    borderRadius: 5,
    margin: 5,
    width: Dimensions.get("screen").width / 2 - 15,
  },
  sub_view: {
    margin: 12,
  },
  image: {
    height: Dimensions.get("screen").height / 4,
    borderRadius: 5,
    resizeMode: "contain",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  price_text: {
    color: "#808080",
    fontWeight: "bold",
  },
  stock_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    textTransform: "uppercase",
  },
});
