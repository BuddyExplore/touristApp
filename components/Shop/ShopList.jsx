import { View, Text, FlatList , Image} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import ShopListItem from './ShopListItem';



export default function ShopList({shopPressed}) {
    const preferencesList = [
        { id: 1,name: 'Sigiriya Keytag Shop', where:'Sigiriya' , icon: '🔔', img:require('../../assets/images/Book/Hotels/Hotel5.jpg')  },
        { id: 2,name: 'Laksala', where:'Hokanda' , icon: '👤', img:require('../../assets/images/Book/Hotels/Hotel6.jpg')  },
        { id: 3,name: 'Barefoot', where:'Moratuwa' , icon: '🔔', img:require('../../assets/images/Book/Hotels/Hotel7.jpg')  },
        { id: 4,name: 'Buddhi Batiks', where:'Pannipitiya' , icon: '⚙️', img:require('../../assets/images/Book/Hotels/Hotel8.jpg')  },
        { id: 5,name: 'Elephant Walk', where:'Nugegoda' , icon: '🔔', img:require('../../assets/images/Book/Hotels/Hotel9.jpg')  },
        { id: 6,name: 'Lakpahana', where:'Hokanda', icon: '👤', img:require('../../assets/images/Book/Hotels/Hotel5.jpg')  },
        { id: 7,name: 'Rose Villa', where:'Moratuwa', icon: '🔔', img:require('../../assets/images/Book/Hotels/Hotel4.jpg')  },
        { id: 8,name: 'Rogan Inn', where:'Pannipitiya', icon: '⚙️', img:require('../../assets/images/Book/Hotels/Hotel3.jpg')  },
        // { name: 'Kayaking', icon: '🔔', img:require('../../assets/images/Home/Prefernces/kayak.png') },
      ];
      const openShop = (itemId) => {
        shopPressed(itemId)
        // if(itemName === 'Vehicles'){
        //   optionPressed(1);
        // } else if(itemName === 'TourGuide'){
        //   optionPressed(2);
        // } else if(itemName === 'Hotel'){
        //   optionPressed(3);
        // }
      };

  return (
    <View>
        <View style={{
            padding:20,
            paddingBottom:0,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:1,
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:20,
                fontFamily:'outfit-bold'
            }}>Popular Shops</Text>
            
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View all</Text>
        </View>
        {preferencesList.map((item, index) => (
                <ShopListItem prefernce={item} key={index} onPress={openShop}/>
            ))}
        {/* <FlatList 
            showsHorizontalScrollIndicator={false}
            data={preferencesList}
            horizontal={false}
            renderItem={({item, index}) => (
                
            )}
        /> */}

    </View>

    
  )
}