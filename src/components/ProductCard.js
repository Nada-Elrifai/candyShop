import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import pizza from "../../assets/images/pizza.png";


export default function ProductCard({item}) {
  const navigation = useNavigation();
  console.log(item);
//   console.log(id, name, price, available, image, addons, addonsRequired);
  return (
    <TouchableWithoutFeedback
    onPress={() => navigation.navigate("AllProducts", {...item})}
    // onPress={() => navigation.navigate("AllProducts", { id, name, price, available, image, addons, addonsRequired })}
    >
      <View
        style={{
          marginRight: 6,
          backgroundColor: "white",
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          width: 160,
          marginVertical: 8,
        }}
      >
        <Image
          source={pizza}
          style={{ height: 150, width: 160, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        />
        <View
          style={{
            paddingHorizontal: 12,
            paddingBottom: 16,
            marginVertical: 8,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 8 }}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 2,
            }}
          >
            <Image style={{ height: 16, width: 16 }} />
            <View style={{ flexDirection: "column" , fontSize: 12}}>
              <Text style={{ color: item.available ? "green" : "red" }}>
                {item.available ? "Available" : "Not available"}
              </Text>
              <Text style={{ color: "gray" }}> {item.price}$</Text>
              <Text style={{ fontWeight: "bold", color: item.addOnsRequired ? "green" : "red"  }}>{item.addOnsRequired ? "AddOns Required" : "AddOns Not Required"}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
