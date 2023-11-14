import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import ProductCard from "./ProductCard";
// import AddonCard from './AddonCard'
import pizzaDish from "../../assets/images/pizzaDish.png";
import { useNavigation } from "@react-navigation/native";

export default function ProductsRow({ name, open, image, currency, products }) {
//   console.log(products);
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View   style={{
          flexDirection: "row",
          justifyContent: "space-arround",
          alignItems: "center",
        }} >
          <Image
            source={pizzaDish}
            style={{ height: 50, width: 50, borderRadius: 10 }}
          />
           <View   style={{
          flexDirection: "column",
          justifyContent: "space-arround",
          paddingHorizontal: 16,
        }} >

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
          <Text style={{ color: "#718096", fontSize: 12, color: open ? 'green' : 'red'  }}>
            {open ? "Open" : "Closed"}
          </Text>
          <Text style={{ color: "#718096", fontSize: 12 }}>
            currency: {currency}
          </Text>
        </View>
        </View>

        
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          overflow: "visible",
          paddingVertical: 5,
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              item = {product}
            // name={product.name}
            // price={product.price}
            // available={product.available}
            // image={product.image}
            // addons={product?.addons}
            // addonsRequired={product.addOnsRequired}


            />
          );
        })}
      </ScrollView>
    </View>
  );
}
