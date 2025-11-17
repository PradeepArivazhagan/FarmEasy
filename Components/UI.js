import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const ProductCard = ({ item, onPress, showEdit }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress?.(item)}>
    <Image source={item.image} style={styles.thumb} />
    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>
        {item.quantity} · ₹{item.pricePerKg}/kg
      </Text>
    </View>
    {showEdit && <Text style={styles.editLink}>Edit</Text>}
  </TouchableOpacity>
);

export const CartItem = ({ item, onIncrease, onDecrease }) => (
  <View style={styles.cartItem}>
    <Image source={item.image} style={styles.cartThumb} />
    <View style={{ flex: 1, marginLeft: 12 }}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>₹{item.pricePerKg}/kg</Text>
      <View style={styles.qtyRow}>
        <TouchableOpacity
          onPress={() => onDecrease(item)}
          style={styles.qtyBtn}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 12 }}>{item.qty ?? 1}</Text>
        <TouchableOpacity
          onPress={() => onIncrease(item)}
          style={styles.qtyBtn}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    <Text style={styles.price}>
      ₹{(item.pricePerKg * (item.qty ?? 1)).toFixed(0)}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E7ECEA",
    marginBottom: 12,
    flexWrap: "wrap"
  },
  thumb: { width: 70, height: 70, borderRadius: 10 },
  cardBody: { flex: 1, marginLeft: 12 },
  cardTitle: { fontFamily: "InterSemiBold", fontSize: 18, color: "#111827" },
  cardSubtitle: { fontFamily: "InterRegular", color: "#6B7280", marginTop: 4 },
  editLink: { color: "#2563EB", fontFamily: "InterSemiBold" },

  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EEF7F0",
    marginBottom: 12,
  },
  cartThumb: { width: 72, height: 72, borderRadius: 10 },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  qtyBtn: {
    width: 34,
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
  },
  price: { fontFamily: "InterSemiBold", fontSize: 16, marginLeft: 12 },
});
