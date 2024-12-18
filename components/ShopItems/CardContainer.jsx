import { View, Text, FlatList, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Card from './Card';
import { useRouter } from 'expo-router';

export default function CardContainer({limit}) {
  const router = useRouter();

  const itemsList = [
      { name: 'SLtshirt', img:require('../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
      { name: 'Trouser', img:require('../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
      { name: 'BatikShirt', img:require('../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
      { name: 'Hat', img:require('../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
      { name: 'Saree', img:require('../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
      { name: 'Sarong', img:require('../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
      { name: 'SLtshirt', img:require('../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
      { name: 'Trouser', img:require('../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
      { name: 'BatikShirt', img:require('../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
      { name: 'Hat', img:require('../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
      { name: 'Saree', img:require('../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
      { name: 'Sarong', img:require('../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
    ];

  return (
    <View style={{alignItems: 'center'}}>
          <FlatList 
              data={itemsList.slice(0, limit)}
              numColumns={3}
              // scrollEnabled={false} // Disable FlatList's own scrolling
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={({item, index}) => (
                <Pressable onPress={() => router.push("Booking/Items/ItemInfo/")}>
                  <Card item={item} key={index} />
                </Pressable>
              )}
          />
    </View>
  )
}