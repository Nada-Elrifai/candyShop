import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import Colors from "../../assets/colors/colors";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.TextTitle}>Let's Get Started!</Text>
        <View style={styles.ImageContainer}>
          <Image
            source={require("../../assets/images/candy2.png")}
            style={styles.Imagewelcome}

          />
        </View>
        <View style={styles.buttonContainer} >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.buttonText}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={styles.rowContainer} >
            <Text style={styles.whiteText} >
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.yellowText} > Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer} >
            <Text style={styles.whiteText} >
              Skip Login check stores
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.yellowText}> HERE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-around',
    backgroundColor: Colors.secondary,
  },
  TextTitle: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
   
  },
  ImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    
  },
  Imagewelcome: {
    width: 350,
    height: 350,
  },

  buttonContainer: {
    marginVertical: 16,
    paddingHorizontal: 7,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: "#FFD700", // Yellow color
    borderRadius: 10,
    marginHorizontal: 7,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4A5568", // Gray color
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  whiteText: {
    color: "#FFFFFF", // White color
    fontWeight: "bold",
  },
  yellowText: {
    color: "#FFD700", // Yellow color
    fontWeight: "bold",
  },
});
