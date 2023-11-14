
import React , {useState} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../assets/colors/colors'
import * as Icon from 'react-native-feather';

export default function SignupScreen() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null); 

  const handleSignUp = () => {
    // Validation checks
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields');
      return;
    }
  
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    const newUser = {
      id: Date.now(),
      name: fullName,
      email: email,
      password: password
    };
  
    updateStaticData(newUser);
    navigation.navigate('Home');
  };
  
  const updateStaticData = (newUser) => {
    try {
      const staticData = require('../../data/staticData.json');
  
      staticData.users = staticData.users || [];
  
      staticData.users.push(newUser);
  
    } catch (error) {
      console.error('Error updating static data:', error);
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
            source={require('../../assets/images/candy3.png')}
            style={styles.image}
          />
        </View>
      </SafeAreaView>

      <View style={styles.formContainer}>
        <View style={[styles.form, styles.spaceY]}>
        <Text style={styles.label}>Full Name</Text>
          <TextInput
             style={styles.input}
             placeholder="Full Name"
             value={fullName}
             onChangeText={(text) => setFullName(text)}
          />

          <Text style={styles.label}>Email Address</Text>
          <TextInput
               style={styles.input}
               placeholder="Email"
               value={email}
               onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
             style={styles.input}
             secureTextEntry
             placeholder="Password"
             value={password}
             onChangeText={(text) => setPassword(text)}
          />

{error && <Text style={styles.errorText}>{error}</Text>}

          <TouchableOpacity 
           onPress={handleSignUp}
          style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>Or</Text>

        <View style={styles.rowContainer}>
          <Text style={styles.newAccountText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.yellowText}> Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer} >
            <Text style={styles.newAccountText} >
              Skip Login check stores
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
    flexDirection: 'row',
    justifyContent: 'start',
  },
  arrowContainer: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  imageContainer:{
    flexDirection: 'row',
    justifyContent:'center'

  },

  image: {
    width: 250,
    height: 180,
  },
  formContainer: {
    flex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical:15,
    
  },
  form: {
    marginHorizontal:20,
  },
  spaceY: {
    marginVertical: 8, 
  },
  label: {
    marginLeft: 12,
    marginBottom:5,
    color: '#4A5568',
    
  },
  input: {
    padding: 15,
    backgroundColor: '#EDF2F7',
    color: '#4A5568',
    borderRadius: 10,
    marginBottom: 10,
    
   
  },
  forgotPassword: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#4A5568',
    marginBottom: 25,
  },
  loginButton: {
    padding: 15,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    marginTop:25
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A5568',
  },
  orText: {
    fontSize: 20,
    color: '#4A5568',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    margin:10
  },
  rowContainer:{
    flexDirection: 'row',
    justifyContent:'center',
    margin:5
    
  },
  newAccountText: {
    color: '#4A5568',
    fontWeight: 'bold',
  },
  signUpText: {
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  yellowText: {
    color: Colors.secondary, // Yellow color
    fontWeight: "bold",
  },
});
