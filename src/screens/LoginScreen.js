import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import * as Icon from "react-native-feather";

import { useNavigation } from "@react-navigation/native";
import Colors from "../../assets/colors/colors";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Simulate authentication logic
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    
    if (trimmedEmail === 'nada@gmail.com' && trimmedPassword === 'securepassword') {
    navigation.navigate('Home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              top: 10,
              left: 7,
              backgroundColor: Colors.white,
              padding: 8,
              borderRadius: 999, // A large value for a circle
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={Colors.secondary} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/candy3.png")}
            style={styles.image}
          />
        </View>
      </SafeAreaView>

      <View style={styles.formContainer}>
        <View style={[styles.form, styles.spaceY]}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
             style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
           style={styles.input}
           secureTextEntry
           placeholder="password"
           value={password}
           onChangeText={(text) => setPassword(text)}
          />

        {error && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity
        //   onPress={() => navigation.navigate('Home')}
          onPress={handleLogin}
          
          style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>Or</Text>

        <View style={styles.rowContainer}>
          <Text style={styles.newAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.yellowText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.newAccountText}>Skip Login check stores</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}

           >
            <Text style={styles.yellowText}> HERE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  safeArea: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "start",
  },
  arrowContainer: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  image: {
    width: 250,
    height: 230,
  },
  formContainer: {
    flex: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  form: {
    marginHorizontal: 20,
  },
  spaceY: {
    marginVertical: 8, // You can adjust the value based on your spacing preference
  },
  label: {
    marginLeft: 10,
    marginBottom: 5,
    color: "#4A5568",
  },
  input: {
    padding: 15,
    backgroundColor: "#EDF2F7",
    color: "#4A5568",
    borderRadius: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "#4A5568",
    marginBottom: 25,
  },
  loginButton: {
    padding: 15,
    backgroundColor: "#FFD700",
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4A5568",
  },
  orText: {
    fontSize: 20,
    color: "#4A5568",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    margin: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
  },
  newAccountText: {
    color: "#4A5568",
    fontWeight: "bold",
  },
  signUpText: {
    fontWeight: "bold",
    color: "#FFD700",
  },
  yellowText: {
    color: Colors.secondary, // Yellow color
    fontWeight: "bold",
  },
});
