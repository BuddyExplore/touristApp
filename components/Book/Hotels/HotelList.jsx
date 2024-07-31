import { View, Text, FlatList , Image} from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import HotelListItem from './HotelListItem';



export default function HotelList() {
    const preferencesList = [
        { name: 'Chill Villa', where:'No. 123, Main Street, Colombo 07' , icon: '🔔', img:require('../../../assets/images/Book/Hotels/Hotel5.jpg')  },
        { name: 'Holiday Inn', where:'4/2, Kandy Road, Peradeniya' , icon: '👤', img:require('../../../assets/images/Book/Hotels/Hotel6.jpg')  },
        { name: 'Adventure Rest', where:'No. 56, Galle Face, Colombo 03' , icon: '🔔', img:require('../../../assets/images/Book/Hotels/Hotel7.jpg')  },
        { name: 'Shanthi Villa', where:'7A, Lake Road, Anuradhapura' , icon: '⚙️', img:require('../../../assets/images/Book/Hotels/Hotel8.jpg')  },
        { name: 'Thilanka Hotels', where:'No. 78, Gampaha Road, Wattala' , icon: '🔔', img:require('../../../assets/images/Book/Hotels/Hotel9.jpg')  },
        { name: 'Queens', where:'No. 89, Hill Street, Jaffna', icon: '👤', img:require('../../../assets/images/Book/Hotels/Hotel5.jpg')  },
        { name: 'Rose Villa', where:'5, Station Road, Mataraa', icon: '🔔', img:require('../../../assets/images/Book/Hotels/Hotel4.jpg')  },
        { name: 'Rogan Inn', where:'3/1, Polonnaruwa Road, Polonnaruwa', icon: '⚙️', img:require('../../../assets/images/Book/Hotels/Hotel3.jpg')  },
        // { name: 'Kayaking', icon: '🔔', img:require('../../assets/images/Home/Prefernces/kayak.png') },
      ];

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
            }}>Book Hotels</Text>
            
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View all</Text>
        </View>
        {preferencesList.map((item, index) => (
                <HotelListItem prefernce={item} key={index}/>
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