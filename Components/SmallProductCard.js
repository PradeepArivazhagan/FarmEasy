import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const SmallProductCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress?.(item)}
      activeOpacity={0.85}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.body}>
        <Text numberOfLines={1} style={styles.title}>
          {item.name}
        </Text>
        <Text style={styles.meta}>
          {item.quantity} · ₹{item.pricePerKg}/kg
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SmallProductCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#ffff00c0",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  body: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontFamily: "InterSemiBold",
    fontSize: 16,
    color: "#111827",
  },
  meta: {
    fontFamily: "InterRegular",
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },
});
