import { StyleSheet, Text, View , TouchableOpacity , FlatList} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Button } from 'react-native-paper'
import Item from './Item';

const Shop = ({onPressBack}) => {
    const styles = StyleSheet.create({
        button: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#e0e0e0',
            borderRadius: 5,
        },
        text: {
            marginLeft: 5,
            fontSize: 16,
            color: 'black',
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          },
    });
  return (
    <View>
        <View style={{
            margin :20,
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
        }}>
            <TouchableOpacity style={styles.button} onPress={() => onPressBack('Back')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                    <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
            <View>
                
                <Text style={{
                    color:'black',
                    fontSize:19,
                    fontFamily:'outfit-medium'
                }}>Welcome to Shop,</Text>
            </View>
        </View>
        {/* <View Style={{
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            width: 200,
            backgroundColor:'white'
        }}>

        <Button ><Ionicons name="arrow-back-outline" size={24} color={Colors.SECOND} /></Button>
        <Text>Hi</Text>
        </View> */}
        
        <View style={styles.row}>
            <Item title="Item 1" />
            <Item title="Item 2" />
        </View>
        <View style={styles.row}>
            <Item title="Item 3" />
            <Item title="Item 4" />
        </View>
        <View style={styles.row}>
            <Item title="Item 5" />
            <Item title="Item 6" />
        </View>
 
    </View>
  )

  
}

export default Shop

const styles = StyleSheet.create({})