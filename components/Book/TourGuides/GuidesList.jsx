import { View, Text, FlatList , Image} from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import GuidesListItem from './GuidesListItem';

export default function GuidesList() {
    const preferencesList = [
        { name: 'J.F. Silva', where:'Nugegoda' , lang: 'English,Tamil', img:require('../../../assets/images/Book/Tourguides/person5.jpg')  },
        { name: 'C.S. Fernando', where:'Hokanda' , lang: 'English,Tamil, Sinhala', img:require('../../../assets/images/Book/Tourguides/person6.jpg')  },
        { name: 'K.M.N. Samarasinghe', where:'Moratuwa' , lang: 'English', img:require('../../../assets/images/Book/Tourguides/person7.jpg')  },
        { name: 'L.P.R. Wijesinghe', where:'Pannipitiya' , lang: 'English,French', img:require('../../../assets/images/Book/Tourguides/person4.jpg')  },
        { name: 'E.P. Jayasinghe', where:'Nugegoda' , lang: 'English,Sinhala', img:require('../../../assets/images/Book/Tourguides/person2.jpg')  },
        { name: 'N.U.V. Rajapaksha', where:'Hokanda', lang: 'English,Tamil', img:require('../../../assets/images/Book/Tourguides/person3.jpg')  },
        { name: 'R.C.D. Fonseka', where:'Moratuwa', lang: 'Tamil', img:require('../../../assets/images/Book/Tourguides/person1.jpg')  },
        { name: 'F.T. Wickramasinghe', where:'Pannipitiya', lang: 'English', img:require('../../../assets/images/Book/Tourguides/person6.jpg')  },
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
            }}>Book Tour Guide</Text>
            
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View all</Text>
        </View>
        {preferencesList.map((item, index) => (
                <GuidesListItem prefernce={item} key={index}/>
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