import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/dev";
const ProductItem = (props) => {
  const [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterMedium: Inter_500Medium, // Assign a custom name to the loaded font style
  });

  if (!fontsLoaded) {
    return null; // Or a loading component like SplashScreen
  }
  const { name, quantity, pricePerKg, image } = props;
  return (
    <View style={styles.productItem}>
      <View style={styles.productDetails}>
        <Image style={styles.productImage} source={image} />
        <View>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>
            {quantity} . ₹{pricePerKg}/kg
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
  },
  productImage: {
    width: 65,
    height: 65,
    borderRadius: 8,
  },
  productDetails: {
    flexDirection: "row",
    gap: 15,
  },
  productName: {
    fontSize: 18,
    fontFamily: "InterSemiBold",
    color: "black",
  },
  productPrice: {
    fontSize: 15,
    fontFamily: "InterMedium",
    color: "#4B5563",
    marginTop: 6,
  },
  editButtonText: {
    fontSize: 16,
    fontFamily: "InterMedium",
    color: "dodgerblue",
    marginRight: 10,
  },
});
