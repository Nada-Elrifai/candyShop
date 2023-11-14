import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { shops } from "../../data/staticData.json";
import * as Icon from "react-native-feather";
import colors from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import bikeGuy from "../../assets/images/bikeGuy.png";
import pizza from "../../assets/images/pizza.png";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../slice/productSlice";
import { removeFromCart, selectCartItems , selectCartTotal} from "../slice/cartSlice";
import { CustomerController } from "../../data/StaticController";


export default function CartScreen() {
  const userIsLoggedIn = CustomerController.isLoggedIn();
  const products = useSelector(selectProduct);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const deliveryFee= 2;
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch = useDispatch();


  useEffect(() => {
    const items = cartItems.reduce((group, item)=>{
        if(group[item.id]){
            group[item.id].push(item);

        }else{
            group[item.id]= [item];
        }
        return group;
    }, {})
    setGroupedItems(items);
  }, [cartItems])

   

const handlePlaceOrder = () => {
    if (!userIsLoggedIn) {
      // Redirect to sign-up screen
      navigation.pop();
      navigation.navigate('SignUp');
    } else {
        navigation.navigate('PreparingOrder')
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/* Top button */}
      <View
        style={{
          position: "relative",
          paddingVertical: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{
            position: "absolute",
            zIndex: 10,
            borderRadius: 999,
            padding: 4,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            top: 10,
            left: 10,
            backgroundColor: colors.secondary,
          }}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
          >
            Your cart
          </Text>
          <Text style={{ textAlign: "center", color: "#7C7C7C" }}>
            {products.name}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.secondary,
          flexDirection: "row",
          padding: 16,
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 80, height: 80, borderRadius: 40 }}
          source={bikeGuy}
        />
        <Text style={{ flex: 1, paddingLeft: 16, color: colors.white }}>
          Deliver in 20-30 minutes
        </Text>
        <TouchableOpacity>
          <Text style={{ color: colors.primary, fontWeight: "bold" }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* AddOns */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", paddingTop: 5, paddingBottom: 50 }}
      >
        {
          // addOns.addOns.map((addOn, index) => (

          // ))
          Object.entries(groupedItems).map(([key, items]) => {
            const addOns = items[0]
            return (
              <View
                key={key}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 8,
                  paddingHorizontal: 4,
                  backgroundColor: "white",
                  borderRadius: 20,
                  marginHorizontal: 8,
                  marginBottom: 8,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Text style={{ color: colors.secondary, fontWeight: "bold", marginHorizontal:6}}>
                    {items.length }x{" "} 
                </Text>
                <Image
                  style={{ height: 56, width: 56, borderRadius: 28 }}
                  source={pizza}
                />
                <Text style={{ flex: 1, fontWeight: "bold",color:colors.textDark , marginHorizontal:6 }}>
                  {addOns.name}
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color:colors.textDark, marginHorizontal:6 }}
                >
                  {addOns.price}$
                </Text>
                <TouchableOpacity
                onPress={() =>
                    dispatch(removeFromCart({id: addOns.id} ))
                
                }
               
                  style={{
                    padding: 4,
                    borderRadius: 999,
                    backgroundColor: colors.secondary,
                  }}
                >
                  <Icon.Minus
                    strokeWidth={2}
                    height={20}
                    width={20}
                    stroke="white"
                  />
                </TouchableOpacity>
              </View>
            );
          })
        }
      </ScrollView>
      {/* Total Price */}
      <View style={{ backgroundColor: colors.textLight, padding: 24, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom:6 }}>
        <Text style={{ color:colors.textDark }}>Subtotal</Text>
        <Text style={{ color:colors.textDark }}>{cartTotal}$</Text>

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical:6 }}>
        <Text style={{ color:colors.textDark }}>Delivery Fee</Text>
        <Text style={{ color:colors.textDark }}>{deliveryFee}$</Text>

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical:6 }}>
        <Text style={{ fontWeight: 'bold' }}>Order Total</Text>
        <Text style={{ fontWeight: 'bold' }}>{cartTotal + deliveryFee}$</Text>

      </View>
      <View>
        <TouchableOpacity 
        //   onPress={()=> navigation.navigate('PreparingOrder')} 
            onPress={handlePlaceOrder}
          style={{ backgroundColor: colors.secondary, padding: 12, borderRadius: 999 , marginTop:6}}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}
