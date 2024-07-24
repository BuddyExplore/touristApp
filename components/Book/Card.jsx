import { View, Text, FlatList , Alert} from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../../constants/Colors'
import CardItem from './CardItem';

export default function Card({optionPressed}) {
    const preferencesList = [
        { name: 'Vehicles', icon: '⚙️', img:require('../../assets/images/Book/Van.png')  },
        { name: 'TourGuide', icon: '👤', img:require('../../assets/images/Book/Guide.png')  },
        { name: 'Hotel', icon: '🔔', img:require('../../assets/images/Home/Prefernces/wildlife.png')  },
        { name: 'Activities', icon: '🔔', img:require('../../assets/images/Home/Prefernces/mask.png')  },
      ];

      
      const handleItemClick = (itemName) => {
        
        if(itemName === 'Vehicles'){
          optionPressed(1);
        } else if(itemName === 'TourGuide'){
          optionPressed(2);
        } else if(itemName === 'Hotel'){
          optionPressed(3);
        }
      };

  return (
    <View>


        <FlatList 
            showsHorizontalScrollIndicator={false}
            data={preferencesList}
            horizontal={true}
            renderItem={({item, index}) => (
                <CardItem prefernce={item} key={index} onPress={handleItemClick}/>
            )}
        />
    </View>
    
    
  )
}