import Farm from "../assets/farm.png";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  useFonts,
  Handlee_400Regular,
  Inter_400Regular,
} from "@expo-google-fonts/dev";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const OnLogin = () => {
    navigation.navigate("Dashboard");
  };

  const [fontsLoaded] = useFonts({
    Handlee: Handlee_400Regular,
    Inter: Inter_400Regular, // Assign a custom name to the loaded font style
  });

  if (!fontsLoaded) {
    return null; // Or a loading component like SplashScreen
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.appName}>Farm Easy</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          style={styles.userInput}
          placeholder="Username"
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity onPress={OnLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Don't have an account?{" "}
          <Text style={styles.registerLink}>Sign up</Text>
        </Text>
        <Image source={Farm} style={styles.image} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    borderColor: "black",
    backgroundColor: "darkgreen",
    fontFamily: "Inter",
  },
  appName: {
    fontFamily: "Handlee",
    fontSize: 55,
    color: "white",
    textAlign: "center",
    marginTop: 120,
  },
  loginContainer: {
    width: "100%",
    marginTop: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "75%",
    paddingTop: 50,
    paddingHorizontal: 45,
  },
  loginText: {
    fontSize: 26,
    color: "black",
    fontWeight: "bold",
  },
  userInput: {
    backgroundColor: "#fcfcfc88",
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 30,
    fontSize: 14,
    borderColor: "#D1D5DB",
    borderWidth: 1,
  },
  passwordInput: {
    backgroundColor: "#fcfcfc88",
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 15,
    fontSize: 14,
    borderColor: "#D1D5DB",
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: "darkgreen",
    paddingVertical: 12,
    marginTop: 30,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 14,
  },
  registerText: {
    textAlign: "center",
    marginTop: 16,
  },
  registerLink: {
    color: "#3B82F6",
  },
  image: {
    width: "150%",
    height: "60%",
    alignSelf: "center",
  },
});
