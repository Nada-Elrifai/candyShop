import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";

import { SafeAreaView } from "react-native-safe-area-context";
import Colors from '../../assets/colors/colors'
import { useNavigation } from '@react-navigation/native';


const CustomHeader = ({...customer}) => {
    const navigation = useNavigation();
    const [newAddress, setNewAddress] = useState(customer.addresses[0]);
    const [newName, setNewName] = useState(customer.username);
   


  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="darkContent" />
        <View style={styles.Usercontainer}>
        <Text>
        Welcome to the shop! {customer.name}
        </Text>    
        </View>
      <View style={styles.topContainer} >

        <View style={styles.searchContainer}>
          {/* <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput
            style={styles.input}
            placeholder="Add your address"
            keyboardType="default"
            
            /> */}
          <View style={styles.locationContainer}>
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text style={styles.locationText}>{customer.addresses}</Text>
          </View>
        </View>
        <View style={styles.TopLeftcontainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate("UpdateAddress")}
            >
            <Text style={{color: 'white', fontSize: 15}}>New Address</Text>
          {/* <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white" /> */}
            </TouchableOpacity>
        </View>
        <View style={styles.TopLeftcontainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate("UserInfo", {userData: customer})}
            >
                        <Text style={{color: 'white', fontSize: 15, width: 60}}>User Info</Text>

          {/* <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white" /> */}
            </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
  );
};



export default CustomHeader;

const styles = StyleSheet.create({
    container:{
      backgroundColor:Colors.white,
        
        flexDirection:'column',
    },
    topContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: 4,
      paddingVertical: 2,
     
    },
    searchContainer: {
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
      padding: 3,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: "gray",
      marginHorizontal:10
    },
    input: {
      marginLeft: 2,
      flex: 1,
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 1,
     
      paddingLeft: 2,
      borderColor: "gray",
    },
    locationText: {
      color: "gray",
      fontSize: 14
    },
    TopLeftcontainer:{
      padding: 8,
      borderRadius: 7 ,
      backgroundColor:Colors.secondary,
      marginHorizontal: 5,
    },
    Usercontainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        backgroundColor:Colors.primary,
        marginVertical: 5,
    }

  });