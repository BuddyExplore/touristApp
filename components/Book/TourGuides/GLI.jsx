//Guide Location Item (This might be deleted later)

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const GLI = ({destinationName}) => {

    
    const [isPressed, setIsPressed] = useState(false);
    const [clr, setClr] = useState('black');
    const [bgclr, setBgClr] = useState('#E8E8E8');

    const handlePress = () => {
        if(!isPressed){
            setClr('white');
            setBgClr('black');
        }else{
            setClr('black');
            setBgClr('#E8E8E8');
        }
        setIsPressed(!isPressed);
    }

    const styles = StyleSheet.create({
        desbtn : {
                backgroundColor: bgclr,
                    borderRadius: 15,
                    alignSelf: 'flex-start',
                    paddingVertical: 3,
                    paddingHorizontal: 20,
                    margin: 5,
        },
         desname : {
            fontSize: 16,
            color: clr
         }
    })
    
  return (
    <View>
      <TouchableOpacity style={styles.desbtn} onPress={handlePress}>
        <Text style={styles.desname}>{destinationName}</Text>
      </TouchableOpacity>
    </View>
  )

  
}

export default GLI

