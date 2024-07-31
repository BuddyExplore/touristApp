import { View, Text,  TouchableOpacity, StyleSheet, Image , Modal, ScrollView} from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import GLI from './GLI'

export default function GuideModalStep3({ guideInfo , onPress , locationName }) {

    const [selectedDates, setSelectedDates] = useState({});

    const onDayPress = (day) => {
        const newSelectedDates = { ...selectedDates };
        const dateString = day.dateString;
    
        if (newSelectedDates[dateString]) {
          delete newSelectedDates[dateString];
        } else {
          newSelectedDates[dateString] = { selected: true, marked: true, selectedColor: 'blue' };
        }
    
        setSelectedDates(newSelectedDates);
      };

    handleNext = (itemName) => {
        onPress(1);
    }

    return(
        <ScrollView>
        <View style={{padding: 35}}>
            
            <View style={{
                width: '100%',
                alignItems: 'center'
            }}>
                <Text style={styles.destinationsHeader}>Select your destinations</Text>
               
                <GLI destinationName={'Sigiriya'} />
                <GLI destinationName={'Dambulla'} />
                <GLI destinationName={'Pidurangala'} />
                

                <Text style={styles.destinationsHeader}>Select your dates</Text>
                <Calendar
                    onDayPress={onDayPress}
                    markedDates={selectedDates}
                    markingType={'multi-dot'}
                    style={styles.calendar}
                />
                <TouchableOpacity
                    style={[styles.editButton, styles.buttonClose]}
                    onPress = {handleNext}
                    >
                    <Text style={styles.buttonTxt}>Request Booking</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    
    destinationsHeader:{
        fontSize: 17,
        fontWeight: 'bold',
        marginTop:  20
    },
    addDestinationBtn: {
        backgroundColor: 'white',
        borderWidth: 2,
        backgroundColor: 'black',
        borderRadius: 50,
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

  editButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    height: 40,
    width: 270,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginTop: 30,
  },
  buttonTxt : {
    fontSize: 21,
    color: Colors.PRIMARY,
    fontWeight: 'bold'
  }
})