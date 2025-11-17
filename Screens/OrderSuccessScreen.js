import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const OrderSuccessScreen = () => {
  const navigation = useNavigation();

  // Animated values
  const circleScale = useRef(new Animated.Value(0)).current;
  const checkScale = useRef(new Animated.Value(0.6)).current;
  const checkOpacity = useRef(new Animated.Value(0)).current;
  const messageOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // play animation sequence
    Animated.sequence([
      Animated.spring(circleScale, {
        toValue: 1,
        friction: 6,
        tension: 80,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(checkScale, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(checkOpacity, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(messageOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // after delay, navigate back to home (clear stack)
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }], // change "Home" to your home screen name if different
      });
    }, 2500); // 2.5s before navigating back

    return () => clearTimeout(timeout);
  }, [circleScale, checkScale, checkOpacity, messageOpacity, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="darkgreen" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Order placed</Text>
      </View>

      <View style={styles.sheet}>
        <View style={styles.center}>
          <Animated.View
            style={[
              styles.circle,
              {
                transform: [{ scale: circleScale }],
                // subtle shadow scale doesn't need animation property
              },
            ]}
          >
            <Animated.Text
              style={[
                styles.check,
                {
                  transform: [{ scale: checkScale }],
                  opacity: checkOpacity,
                },
              ]}
            >
              ✓
            </Animated.Text>
          </Animated.View>

          <Animated.Text
            style={[styles.successText, { opacity: messageOpacity }]}
          >
            Order placed successfully
          </Animated.Text>

          <Text style={styles.subText}>
            Thanks — your order is being processed.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgreen",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 6,
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Baloo2Bold",
    color: "white",
    fontSize: 20,
  },

  sheet: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    paddingHorizontal: 12,
  },

  circle: {
    width: Math.min(200, width * 0.5),
    height: Math.min(200, width * 0.5),
    borderRadius: Math.min(200, width * 0.5) / 2,
    backgroundColor: "#E9F7EE", // soft green background
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  check: {
    fontSize: 64,
    color: "darkgreen",
    fontWeight: "700",
  },

  successText: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: "InterSemiBold",
    color: "#111827",
  },

  subText: {
    marginTop: 8,
    fontSize: 14,
    color: "#6B7280",
    fontFamily: "InterRegular",
    textAlign: "center",
  },
});
