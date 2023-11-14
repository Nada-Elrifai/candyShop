import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import colors from "../../assets/colors/colors";
import pizza from "../../assets/images/pizza.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AddOnsRow from "../components/AddOnsRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setProduct } from "../slice/productSlice";

export default function ProductScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  console.log("hiiii", item);
  const dispatch = useDispatch();

  useEffect(() => {
    if(item && item.id){
        dispatch(setProduct({...item}))
    }
  }, []);
  return (
    <>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", paddingTop: 5, paddingBottom: 50 }}
      >
        <View style={{ position: "relative" }}>
          <Image style={{ width: "100%", height: 270 }} source={pizza} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 30,
              left: 7,
              backgroundColor: colors.white,
              padding: 8,
              borderRadius: 999, // A large value for a circle
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={colors.secondary} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "white",
            marginTop: -20,
            paddingTop: 20,
          }}
        >
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 2,
                }}
              >
                <Text style={{ fontSize: 12 }}>
                  <Text style={{ color: item.available ? "green" : "red" }}>
                    Item: {item.available ? "Available" : "Not available"}
                  </Text>{" "}
                  ·{" "}
                  <Text style={{ fontWeight: "bold", color: "gray" }}>
                    {item.price}$
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 2,
                }}
              >
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text style={{ color: "gray", fontSize: 12 }}>
                  {" "}
                  Nearby · 123 Main St
                </Text>
              </View>
            </View>
            <Text
              style={{
                marginTop: 2,
                fontSize: 12,
                color: item.addOnsRequired ? "green" : "red",
              }}
            >
              <Text style={{ color: "gray", fontSize: 12 }}>AddOns:</Text>
              {item.addOnsRequired ? " Required" : " Not Required"}
            </Text>
          </View>
        </View>
        <View style={{ paddingBottom: 36, backgroundColor: "white" }}>
          <Text
            style={{
              paddingHorizontal: 16,
              paddingVertical: 16,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            AddOns
          </Text>
          {/* addons map */}
          <View>
            {item.addOns.map(
              (addOn, index) => {
                return <AddOnsRow item={{ ...addOn }} key={index} />;
              }
              // <Text key={index}>{addOn.name} - {addOn.price}</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
