

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomerController } from '../../data/StaticController';
import Colors from '../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';

export default function UpdateAddressScreen() {


    const [addresses, setAddresses] = useState([CustomerController.getCustomer().addresses[0]]);
    const [newAddress, setNewAddress] = useState('');
    const [editAddressIndex, setEditAddressIndex] = useState(null);
  
    const addAddress = () => {
      if (newAddress.trim() === '') {
        return; // Don't add empty addresses
      }
  
      if (editAddressIndex !== null) {
        // If editing, update the existing address
        const updatedAddresses = [...addresses];
        updatedAddresses[editAddressIndex] = newAddress;
        setAddresses(updatedAddresses);
        setEditAddressIndex(null);
      } else {
        // If not editing, add a new address
        setAddresses([...addresses, newAddress]);
      }
  
      setNewAddress(''); // Clear the input
    };
  
    const editAddress = (index) => {
      setEditAddressIndex(index);
      setNewAddress(addresses[index]);
    };
  
    const deleteAddress = (index) => {
      const updatedAddresses = [...addresses];
      updatedAddresses.splice(index, 1);
      setAddresses(updatedAddresses);
    };

    const handleUpdateAddress = () => {
        if (newAddress.trim() === '') {
            alert('Address cannot be empty');
            return;
        }
        CustomerController.updateAddresses(newAddress);
        setNewAddress('');
        alert('Address updated successfully!');
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Addresses</Text>
      <View style={styles.addressContainer}>
        <FlatList
          data={addresses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.addressItem}>
              <Text style={styles.addressText}>{item}</Text>
              <TouchableOpacity onPress={() => editAddress(index)}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteAddress(index)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.addAddressContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Address"
          value={newAddress}
          onChangeText={(text) => setNewAddress(text)}
        />
        <TouchableOpacity onPress={addAddress} style={styles.addButton}>
          <Text style={styles.addButtonText}>{editAddressIndex !== null ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.secondary,
        margin : 50,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      addressContainer: {
        marginTop: 10,
        marginBottom: 20,
      },
      addressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      addressText: {
        flex: 1,
        fontSize: 16,
      },
      editButtonText: {
        color: 'blue',
        marginRight: 10,
      },
      deleteButtonText: {
        color: 'red',
        marginRight: 10,
      },
      addAddressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 10,
      },
      addButton: {
        backgroundColor: Colors.secondary,
        padding: 10,
        borderRadius: 5,
      },
      addButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
    });


