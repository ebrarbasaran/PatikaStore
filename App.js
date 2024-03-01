import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import ProductCard from "./src/components/ProductCard";
import products from "./src/products.json";

const renderProduct = ({ item }) => <ProductCard product={item} />;

const App = () => {
  const [search, setSearch] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        placeholder="Ara..."
      ></TextInput>

      <FlatList
        data={products}
        renderItem={renderProduct}
        style={styles.flat_list}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_text: {
    margin: 10,
    marginBottom: 5,
    fontSize: 25,
    fontWeight: "bold",
    color: "#700470",
  },
  input: {
    height: 45,
    margin: 10,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "#efeff5",
    textAlign: "auto",
    paddingHorizontal: 10,
  },
  flat_list: {
    margin: 5,
  },
});

export default App;
