import React from "react";
import Farm from "../assets/farm.png";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
  Baloo2_700Bold,
} from "@expo-google-fonts/dev";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const OnLogin = () => {
    navigation.navigate("Dashboard");
  };

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
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.appName}>Farm Easy</Text>
        <Text style={styles.tagLine}>Grow Smarter. Sell Faster.</Text>
      </View>
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
    flex: 1,
    borderColor: "black",
    backgroundColor: "darkgreen",
  },
  appName: {
    fontFamily: "Baloo2Bold",
    fontSize: 55,
    color: "white",
    textAlign: "center",
    marginTop: 120,
  },
  tagLine: {
    color: "white",
    textAlign: "center",
    fontFamily: "InterMedium",
    fontSize: 14,
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
    fontFamily: "InterSemiBold",
  },
  userInput: {
    backgroundColor: "#fcfcfc88",
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 26,
    fontSize: 14,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    fontFamily: "InterRegular",
  },
  passwordInput: {
    backgroundColor: "#fcfcfc88",
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 18,
    fontSize: 14,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    fontFamily: "InterRegular",
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
    fontFamily: "InterSemiBold",
  },
  registerText: {
    textAlign: "center",
    marginTop: 16,
    fontFamily: "InterMedium",
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
