import React from "react";
import { SafeAreaView, Image, Text, View } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ product }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sub_view}>
        <Image style={styles.image} source={{ uri: product.imgURL }}></Image>
        <Text style={styles.title_text}>{product.title}</Text>
        <Text style={styles.price_text}>{product.price}</Text>
        <Text style={styles.stock_text}>
          {!product.inStock ? "Stokta Yok" : ""}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductCard;
