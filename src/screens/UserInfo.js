

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomerController } from '../../data/StaticController';
import Colors from '../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import * as Icon from 'react-native-feather';

export default function UserInfo() {
    const navigation = useNavigation();
    const route = useRoute();
    const { userData } = route.params; // Assuming you pass the user data as a navigation parameter

    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [addresses, setAddresses] = useState(userData.addresses.join('\n')); // Convert array to newline-separated string
    const [error, setError] = useState(null); 
    const [updatedUserData, setUpdatedUserData] = useState(null);
  
    const handleSaveChanges = () => {
      // Validate inputs (add more validation as needed)
      if (name.trim() === '' || email.trim() === '') {
         setError('Please fill in all fields');

        return;
      }
  
      // Split the addresses string into an array
      const updatedAddresses = addresses.split('\n');
  
      const updatedUserData = {
        ...userData,
        name: name,
        email: email,
        addresses: updatedAddresses,
      };
      setUpdatedUserData(updatedUserData);
      Keyboard.dismiss();
    //   navigation.goBack();
    };
  return (
    <View style={{flex:1}}>
        <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={{
        top: 70,
        left: 7,
        backgroundColor: Colors.white,
        padding: 8,
        borderRadius: 999, // A large value for a circle
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 40,
    }}
  >
    <Icon.ArrowLeft strokeWidth={3} stroke={Colors.secondary} />
  </TouchableOpacity>

  <View style={{ flex: 2, marginTop: 100, marginLeft:50 }}>
 
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>
        Edit Profile
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
          width: '80%', // Adjust the width as needed
        }}
        placeholder="Full Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
          width: '80%', // Adjust the width as needed
        }}
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{
          height: 100,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
          width: '80%', // Adjust the width as needed
        }}
        placeholder="Addresses (one per line)"
        multiline
        value={addresses}
        onChangeText={(text) => setAddresses(text)}
      />
      <TouchableOpacity
        onPress={handleSaveChanges}
        style={{
          backgroundColor: Colors.secondary  , 
          padding: 10,
          borderRadius: 5,
          height: 40,
          width: 150,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign:'center', fontSize:'15' }}>
          Save Changes
        </Text>

        </TouchableOpacity>
        <View>
      {/* Your input fields and other UI elements here */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: 'black', marginTop:40 }}>
      Updated User Data:
      </Text>
      {updatedUserData && (
        <View>
          <Text>Name: {updatedUserData.name}</Text>
          <Text>Email: {updatedUserData.email}</Text>
          <Text>Addresses: {updatedUserData.addresses.join(', ')}</Text>
        </View>
      )}
    </View>
        
    </View>
    

    
  
    </View>
    );
};


  
 