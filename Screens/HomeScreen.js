import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ProductCard } from "../Components/UI";
import SmallProductCard from "../Components/SmallProductCard";
import { useNavigation } from "@react-navigation/native";
import Farmer from "../assets/farmer.png";
import Carrot from "../assets/carrot.png";
import Tomato from "../assets/tomato.png";
import Potato from "../assets/potato.png";
import Onion from "../assets/onion.png";
import Cabbage from "../assets/cabbage.png";
import Spinach from "../assets/spinach.png";
import Logo from "../assets/logo.png";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
  Baloo2_700Bold,
} from "@expo-google-fonts/dev";
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

const HomeScreen = ({ navigation }) => {
  const navigations = useNavigation()

  const goToDashboard = ()=>{
    navigations.navigate("Dashboard")
  }
  const [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterSemiBold: Inter_600SemiBold,
    InterMedium: Inter_500Medium,
    Baloo2Bold: Baloo2_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image source={Logo} style={{ width: 30, height: 40 }} />
          <Text style={styles.title}>Farm Easy</Text>
        </View>
        <TouchableOpacity onPress={goToDashboard}>
        <Image source={Farmer} style={{ width: 40, height: 40, borderRadius: 25, borderWidth: 2, borderColor: "white" }} />
        </TouchableOpacity>
      </View>

      <View style={styles.sheet}>
        <TextInput
          placeholder="Search products"
          style={styles.search}
          placeholderTextColor="#9CA3AF"
        />
        <Text style={styles.sectionTitle}>Recommended</Text>

        <FlatList
          horizontal={true}
          data={vegetables.slice(0, 6)} // choose how many recommended
          keyExtractor={(i) => i.id.toString()}
          renderItem={({ item }) => (
            <SmallProductCard
              item={item}
              onPress={() => navigation.navigate("ProductDetails", { item })}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 6,
            paddingBottom: 6,
          }}
          // snapping behavior for a nice scroll feel:
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={232}
        />

        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>
          All Products
        </Text>
        <FlatList
          data={vegetables}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onPress={() => navigation.navigate("ProductDetails", { item })}
            />
          )}
          keyExtractor={(i) => i.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "darkgreen" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 25,
    paddingBottom: 10,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Baloo2Bold",
    fontSize: 36,
    color: "white",
    marginLeft: 10,
  },
  sheet: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  search: {
    backgroundColor: "#F3F7F5",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E9EE",
  },
  sectionTitle: {
    fontFamily: "InterSemiBold",
    fontSize: 20,
    marginTop: 12,
    marginBottom: 8,
  },
});
