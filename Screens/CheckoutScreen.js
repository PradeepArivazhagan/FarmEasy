import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CheckoutScreen = ({ route, navigation }) => {
  const items = route.params?.items ?? [];
  const subtotal = items.reduce((s, i) => s + i.pricePerKg * (i.qty || 1), 0);

  return (
    <View style={{ flex: 1, backgroundColor: "darkgreen" }}>
      <View style={styles.header}>
        <Text style={styles.hTitle}>Checkout</Text>
      </View>
      <View style={styles.sheet}>
        <Text style={styles.sectionTitle}>Shipping address</Text>
        <View style={styles.addrCard}>
          <Text style={{ fontFamily: "InterSemiBold" }}>Maanikam</Text>
          <Text style={{ fontFamily: "InterRegular", color: "#6B7280" }}>
            12, Farm Street, Namakkal
          </Text>
          <TouchableOpacity style={{ marginTop: 8 }}>
            <Text style={{ color: "#2563EB" }}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Payment</Text>
        <View style={styles.addrCard}>
          <Text style={{ fontFamily: "InterRegular" }}>Cash on Delivery</Text>
        </View>

        <View style={styles.summary}>
          <Text style={{ fontFamily: "InterRegular" }}>Subtotal</Text>
          <Text style={{ fontFamily: "InterSemiBold" }}>
            ₹{subtotal.toFixed(0)}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => navigation.navigate("OrderSuccess")}
        >
          <Text style={{ color: "white", fontFamily: "InterSemiBold" }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  header: { paddingTop: 40, paddingBottom: 6, alignItems: "center" },
  hTitle: { fontFamily: "Baloo2Bold", color: "white", fontSize: 20 },
  sheet: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  sectionTitle: { fontFamily: "InterSemiBold", marginTop: 12, marginBottom: 6 },
  addrCard: {
    backgroundColor: "#FAFFFA",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6F2EA",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  confirmBtn: {
    marginTop: 20,
    backgroundColor: "darkgreen",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
});
