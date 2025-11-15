import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Farmer from "../assets/farmer.png";
import Carrot from "../assets/carrot.png";
import Tomato from "../assets/tomato.png";
import Potato from "../assets/potato.png";
import Onion from "../assets/onion.png";
import Cabbage from "../assets/cabbage.png";
import Spinach from "../assets/spinach.png";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/dev";
import ProductItem from "../Components/ProductItem";

const vegetables = [
  {
    id: 1,
    name: "Carrot",
    quantity: "20kg",
    pricePerKg: 43,
    image: Carrot,
  },
  {
    id: 2,
    name: "Tomato",
    quantity: "15kg",
    pricePerKg: 30,
    image: Tomato,
  },
  {
    id: 3,
    name: "Potato",
    quantity: "50kg",
    pricePerKg: 32,
    image: Potato,
  },
  {
    id: 4,
    name: "Onion",
    quantity: "45kg",
    pricePerKg: 29,
    image: Onion,
  },
  {
    id: 5,
    name: "Cabbage",
    quantity: "25kg",
    pricePerKg: 26,
    image: Cabbage,
  },
  {
    id: 6,
    name: "Spinach",
    quantity: "23kg",
    pricePerKg: 17,
    image: Spinach,
  },
];

const Dashboard = () => {
  const [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterMedium: Inter_500Medium, // Assign a custom name to the loaded font style
  });

  if (!fontsLoaded) {
    return null; // Or a loading component like SplashScreen
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileSection}>
        <Image style={styles.profileImage} source={Farmer} />
        <View>
          <Text style={styles.farmerName}>Welcome, Maanikam</Text>
          <Text style={styles.farmerRole}>Farmer</Text>
        </View>
      </View>
      <View style={styles.salesSection}>
        <Text style={styles.salesText}>Total Sales</Text>
        <Text style={styles.salesAmount}>₹15,230</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addProductButton}>
          <Text style={{ color: "white", fontFamily: "InterSemiBold" }}>
            Add Product
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewOrdersButton}>
          <Text style={{ color: "darkgreen", fontFamily: "InterSemiBold" }}>
            View Orders
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productsWrapper}>
        <Text style={styles.yourProductText}>Your Products</Text>
        <FlatList
          data={vegetables}
          renderItem={({ item }) => <ProductItem {...item} />}
          keyExtractor={(item) => item.id.toString()}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 50 }} // extra bottom padding
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  profileSection: {
    height: 140,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginRight: 15,
  },
  farmerName: {
    fontSize: 20,
    fontFamily: "InterSemiBold",
  },
  farmerRole: {
    fontSize: 16,
    fontFamily: "InterRegular",
    color: "#4B5563",
  },
  salesSection: {
    backgroundColor: "#dff7e9",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  salesText: {
    fontSize: 18,
    fontFamily: "InterSemiBold",
    color: "#111827",
  },
  salesAmount: {
    fontSize: 28,
    fontFamily: "InterBold",
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
  },
  addProductButton: {
    width: "48%",
    backgroundColor: "darkgreen",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  viewOrdersButton: {
    width: "48%",
    backgroundColor: "white",
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "darkgreen",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  yourProductText: {
    fontSize: 22,
    fontFamily: "InterSemiBold",
    marginTop: 28,
    color: "black",
  },
  productsWrapper: {
    flex: 1,
  },
});
