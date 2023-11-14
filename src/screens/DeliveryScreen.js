import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { shops } from "../../data/staticData.json";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import colors from "../../assets/colors/colors";
import bikeGuy from "../../assets/images/bikeGuy.png";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../slice/productSlice";
import { emptyCart } from "../slice/cartSlice";
import { CustomerController } from "../../data/StaticController";

export default function DeliveryScreen() {
    const customer = CustomerController.getCustomer();

//   const addOns = shops[0].products[0];
  const navigation = useNavigation();
//   console.log(shops[0].name);
  const staticLocation = {
    latitude: 37.7749, // Replace with your desired latitude
    longitude: -122.4194, // Replace with your desired longitude
  };
  const addOns = useSelector(selectProduct);

  const dispatch = useDispatch();

  const  cancelOrder= () => {
    // dispatch(emptyBasket());
    dispatch(emptyCart());
    navigation.navigate("Home");
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          ...staticLocation,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
      >
        <Marker
          coordinate={staticLocation}
          title={shops[0].name}
          description={"Enjoy your Candy"}
          //   title={restaurant.title}
          //   description={restaurant.description}
          pinColor={colors.secondary}
        />
      </MapView>

      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          marginTop: -12,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity style={{ position: "absolute", right: 4, top: 2 }}>
          {/* Add your content here */}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{paddingVertical: 10, paddingHorizontal: 5}}>
            <Text
              style={{ fontSize: 16, color: "#4A5568", fontWeight: "bold"}}
            >
              Estimated Arrival
            </Text>
            <Text
              style={{ fontSize: 30, fontWeight: "bold", color: "#4A5568" }}
            >
              20-30 Minutes
            </Text>
            <Text
              style={{ marginTop: 2, color: "#4A5568", fontWeight: "bold" }}
            >
              Your Order is on its way
            </Text>
            <Text
              style={{ marginTop: 2, color: "#4A5568", fontWeight: "bold" }}
            >
              Make sure of your location: {" "}
              <Text style={{color: 'red'}}>
              {customer.addresses[0]}
                </Text> 
            </Text>
          </View>
          <Image style={{ height: 80, width: 80 }} source={bikeGuy} />
        </View>
        <View
          style={{
            backgroundColor: colors.secondary,
            padding: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 999,
            marginVertical: 25,
            marginHorizontal:10 ,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.4)",
              padding: 1,
              borderRadius: 999,
              margin:4
            }}
          >
            <Image
              style={{ width: 80, height: 80, borderRadius: 999}}
              source={bikeGuy}
            />
          </View>

          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Cancel your order
            </Text>
            
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-x-3",
              marginRight: 6,
            }}
          >
            

            <TouchableOpacity
            //   onPress={handleCancel}
                onPress={cancelOrder}
                style={{
                    backgroundColor: "white",
                    padding: 8,
                    borderRadius: 999,
                    marginRight:25,
                 }}
            >
              {/* Replace the Icon.X component with your actual cancel icon */}
              <Icon.X stroke={"red"} strokeWidth="5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
