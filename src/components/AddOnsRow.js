import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import pizza from "../../assets/images/pizza.png";
import colors from "../../assets/colors/colors";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItemsById, selectCartTotal } from "../slice/cartSlice";

export default function AddOnsRow({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => selectCartItemsById(state, item.id))

  const handleIncrease = () => {
    dispatch(addToCart({...item}))
  }
  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}))
  }
  return (
    <View>
    <ScrollView>

    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 8,
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 8,
        marginHorizontal: 6,
      }}
    >
      <Image
        style={{ borderRadius: 24, height: 100, width: 100 }}
        source={pizza}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: 12,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 12 }}>
            <Text style={{ color: item.available ? "green" : "red" }}>
              Item: {item.available ? "Available" : "Not available"}
            </Text>{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "gray", fontSize: 18, fontWeight: "bold" }}>
            ${item.price}
          </Text>
          {/* Your additional content goes here */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={handleDecrease}
        disabled={!totalItems.length}
        // disabled={!basketItems.length}
        style={{
          padding: 4,
          borderRadius: 999,
          backgroundColor: colors.secondary,
        }}
      >
        <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
      </TouchableOpacity>
      <Text style={{ paddingHorizontal: 12 }}>
        {/* {basketItems.length} */}
        {totalItems.length}
        </Text>
      <TouchableOpacity
        onPress={handleIncrease}
        style={{
          padding: 4,
          borderRadius: 999,
          backgroundColor: colors.secondary,
        }}
      >
        <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />
      </TouchableOpacity>
    </View>
        </View>
      </View>
    </View>
    </ScrollView>
    </View>
  );
}
