import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CartItem } from "../Components/UI";

const CartScreen = ({ route, navigation }) => {
  // In real app, use context/store; here use route param add or sample state
  const initial = route.params?.add ? [route.params.add] : [];
  const [items, setItems] = useState(initial);

  useEffect(() => {
    if (route.params?.add) {
      setItems((prev) => {
        // simple merge by id
        const exists = prev.find((p) => p.id === route.params.add.id);
        if (exists)
          return prev.map((p) =>
            p.id === route.params.add.id
              ? { ...p, qty: (p.qty || 1) + route.params.add.qty }
              : p
          );
        return [...prev, { ...route.params.add }];
      });
    }
  }, [route.params?.add]);

  const increase = (it) =>
    setItems((prev) =>
      prev.map((p) => (p.id === it.id ? { ...p, qty: (p.qty || 1) + 1 } : p))
    );
  const decrease = (it) =>
    setItems((prev) =>
      prev.map((p) =>
        p.id === it.id ? { ...p, qty: Math.max(1, (p.qty || 1) - 1) } : p
      )
    );
  const subtotal = items.reduce((s, i) => s + i.pricePerKg * (i.qty || 1), 0);

  return (
    <View style={{ flex: 1, backgroundColor: "darkgreen" }}>
      <View style={styles.header}>
        <Text style={styles.hTitle}>Cart</Text>
      </View>
      <View style={styles.sheet}>
        {items.length === 0 ? (
          <Text style={{ fontFamily: "InterRegular", color: "#6B7280" }}>
            Your cart is empty
          </Text>
        ) : (
          <>
            <FlatList
              data={items}
              keyExtractor={(i) => i.id.toString()}
              renderItem={({ item }) => (
                <CartItem
                  item={item}
                  onIncrease={increase}
                  onDecrease={decrease}
                />
              )}
            />
            <View style={styles.totals}>
              <Text style={{ fontFamily: "InterRegular" }}>Subtotal</Text>
              <Text style={{ fontFamily: "InterSemiBold" }}>
                ₹{subtotal.toFixed(0)}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={() => navigation.navigate("Checkout", { items })}
            >
              <Text style={{ color: "white", fontFamily: "InterSemiBold" }}>
                Proceed to Checkout
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  header: { paddingTop: 40, paddingBottom: 6, alignItems: "center" },
  hTitle: { fontFamily: "Baloo2Bold", color: "white", fontSize: 30 },
  sheet: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  totals: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#F6FFF6",
    borderRadius: 10,
    marginTop: 10,
    borderWidth:1,
    borderColor: "#defbdeff",
  },
  checkoutBtn: {
    backgroundColor: "darkgreen",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 40
  },
});
