import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import {CustomerController} from '../../data/StaticController'
import { SafeAreaView } from 'react-native-safe-area-context'
import { shops } from "../../data/staticData.json";
import { ShopController } from '../../data/StaticController'
import ProductsRow from '../components/ProductsRow'


export default function HomeScreen() {
      const customer = CustomerController.getCustomer();
      const shops = ShopController.getShop();
    //   console.log("sdfghjk",shops);
  return (
    <View>

    <View>
        <CustomHeader {...customer} />
    </View>
    <View style={{marginTop:5}} >
        {
            shops.map((item, index)=>{
                return(
                   
                    <ProductsRow
                    key={index}
                    name={item.name}
                    open={item.open}
                    image={item.image}
                    currency={item.currency}
                    products={item.products}
                    />
                )
            })
        }
        
          

        </View>


    </View>

  )
}