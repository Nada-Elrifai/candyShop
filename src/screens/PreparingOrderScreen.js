import { View, Text, Image } from 'react-native'
import React, {useEffect} from 'react'
import delivery from '../../assets/images/delivery.gif'
import { useNavigation } from '@react-navigation/native';

export default function PreparingOrderScreen() {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery');
        },3000);
    },[]) 
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{ height: 380, width: 360 }} source={delivery} />
    </View>
  )
}