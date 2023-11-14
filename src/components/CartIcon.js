import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slice/cartSlice';

export default function CartIcon() {
    const navigation = useNavigation();
    const CartItems = useSelector(selectCartItems);
    const CartTotal = useSelector(selectCartTotal);
    if(!CartItems.length)return ;
  return (
    <View style={{ position: 'absolute', bottom: 20, width: '100%', zIndex: 50 }}>
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 999,
        padding: 16,
        backgroundColor: colors.secondary,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View
        style={{
          padding: 8,
          paddingHorizontal: 16,
          borderRadius: 999,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
          {CartItems.length}
          
        </Text>
      </View>

      <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'white' }}>
        View Cart
      </Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
        ${CartTotal}
        
      </Text>
    </TouchableOpacity>
  </View>
  )
}