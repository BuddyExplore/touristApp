import { View, Text,  TouchableOpacity, StyleSheet, Image , Modal, ScrollView} from 'react-native';
import React , {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import AddDestinationPlace from './AddDestinationPlace'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';

export default function VehicleModalStep3({ vehicleInfo , onPress , locationName }) {

    const [selectedDates, setSelectedDates] = useState({});
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);


    
    const onDayPress = (day , type) => {
        // const newSelectedDates = { ...selectedDates };
        // const dateString = day.dateString;
    
        // if (newSelectedDates[dateString]) {
        //   delete newSelectedDates[dateString];
        // } else {
        //   newSelectedDates[dateString] = { selected: true, marked: true, selectedColor: 'blue' };
        // }
    
        // setSelectedDates(newSelectedDates);
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
                <Text style={{fontSize: 16}}><Text style={{fontWeight: 'bold'}}>Pickup location :</Text>{locationName}</Text>
                <Text style={styles.destinationsHeader}>Select your destinations</Text>
                </View>

                <AddDestinationPlace />

                <View style={{
                width: '100%',
                alignItems: 'center'
                }}>
                    

                <TouchableOpacity
                    style={[styles.addDestinationBtn]}
                    >
                    <Text style={{color: 'white'}}><Ionicons name="add-outline" size={30} /></Text>
                </TouchableOpacity>
                <Text style={styles.destinationsHeader}>Select your dates</Text>
                {/* <Calendar
                    onDayPress={onDayPress}
                    markedDates={selectedDates}
                    markingType={'multi-dot'}
                    style={styles.calendar}
                /> */}
                <View style={{transform: [{ scale: 0.8 }],}}>
                 <CalendarPicker 
                  onDateChange={onDayPress} 
                  allowRangeSelection={true}
                  minDate={new Date()}
                  maxRangeDuration={10}
                  selectedRangeStyle={{
                      backgroundColor:Colors.PRIMARY,
                  }}
                  selectedDayTextStyle={{
                      color:Colors.WHITE,
                  }}
                  />
                  </View>
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
        marginTop: 30
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