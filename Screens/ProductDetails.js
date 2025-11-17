import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ProductCard } from "../Components/UI";

const ProductDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const [qty, setQty] = useState(1);

  return (
    <View style={{ flex: 1, backgroundColor: "darkgreen" }}>
      <View style={styles.header}>
        <Text style={styles.title}>Product Details</Text>
      </View>

      <ScrollView style={styles.sheet}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.meta}>
          {item.quantity} · ₹{item.pricePerKg}/kg
        </Text>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.desc}>
          Freshly harvested {item.name.toLowerCase()} — high quality and
          farm-fresh.
        </Text>

        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Quantity</Text>
          <View style={styles.qtyRow}>
            <TouchableOpacity
              onPress={() => setQty(Math.max(1, qty - 1))}
              style={styles.qtyBtn}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 12 }}>{qty}</Text>
            <TouchableOpacity
              onPress={() => setQty(qty + 1)}
              style={styles.qtyBtn}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate("Cart", { add: { ...item, qty } })}
        >
          <Text style={{ color: "white", fontFamily: "InterSemiBold" }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  header: { paddingTop: 40, paddingBottom: 6, alignItems: "center" },
  title: { fontFamily: "Baloo2Bold", color: "white", fontSize: 30 },
  sheet: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  image: { width: "100%", height: 220, borderRadius: 12 },
  name: { fontFamily: "InterSemiBold", fontSize: 22, marginTop: 12 },
  meta: { fontFamily: "InterRegular", color: "#6B7280", marginTop: 6 },
  sectionTitle: { fontFamily: "InterSemiBold", marginTop: 16, marginBottom: 6 },
  desc: { fontFamily: "InterRegular", color: "#6B7280" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  qtyRow: { flexDirection: "row", alignItems: "center" },
  qtyBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
  },
  addBtn: {
    marginTop: 22,
    backgroundColor: "darkgreen",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
});
