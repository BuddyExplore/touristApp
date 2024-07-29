import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }}>
        <View style={{
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
        }}>
            <Image source={require("./../../assets/images/Home/profile.png")}
                style={{
                    width:45,
                    height:45,
                    borderRadius:99
                }}
            />
            <View>
                <Text style={{
                    color:'#fff'
                }}>Buy and reserve your items,</Text>
                <Text style={{
                    color:'#fff',
                    fontSize:19,
                    fontFamily:'outfit-medium'
                }}>Lakruwan Kasun</Text>
            </View>
        </View>

        {/* search bar */}
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            backgroundColor:'#fff',
            padding:8,
            marginVertical:2,
            marginTop:12,
            borderRadius:8
        }}>
            <Ionicons name="search" size={24} color={Colors.SECOND} />
            <TextInput placeholder='Search for Shops & items...'  
                style={{
                    fontFamily:'outfit',
                    fontSize:16
                }}
            />
        </View>

    </View>
  )
}