import { StyleSheet, Text, View , TextInput, TouchableOpacity , Modal } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const VehicleSearchFilter = ({searchPressed , isSearch}) => {

    const [searchPressedBtn, setSearchPressedBtn] = useState(isSearch);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [selectedDates, setSelectedDates] = useState({});
    const [selectedDates1, setSelectedDates1] = useState({});

    const handleSearch = () => {
        searchPressed(true)
    }

    const handleSelectDate = () => {
        setModalVisible(false)
        setModalVisible1(false)
    }



    const handleOpenSelectDate = () => {
        setModalVisible(true)
    }

    const handleOpenSelectDate1 = () => {
        setModalVisible1(true)
    }

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

      const onDayPress1 = (day) => {
        const newSelectedDates = { ...selectedDates };
        const dateString = day.dateString;
    
        if (newSelectedDates[dateString]) {
          delete newSelectedDates[dateString];
        } else {
          newSelectedDates[dateString] = { selected: true, marked: true, selectedColor: 'blue' };
        }
    
        setSelectedDates1(newSelectedDates);
      };
  return (
    <View>

    {/* <View style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: '100%'
    }}>
      <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                width: '70%',
                height: 50,
                alignItems:'center',
                backgroundColor:'#fff',
                padding:8,
                borderRadius:12,
                padding: 10,
                borderWidth: 1,
                borderColor: '#E8E8E8'
            }}>
                <Ionicons name="search" size={24} color={Colors.SECOND} />
                <TextInput placeholder='Search for Vehicles and Drivers..'  
                    style={{
                        fontFamily:'outfit',
                        fontSize:16
                    }}
                />
            </View>
            <TouchableOpacity style={styles.touchable}>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    gap:10,
                    alignItems:'center',
                    
                    height: 50,
                    padding: 10
                }}>
                    <Ionicons name="options-outline" size={24} color={'black'} />
                    <Text>Filter</Text>
                </View>
        </TouchableOpacity>
    </View> */}

    <View style={{
        height: 60,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        marginHorizontal: 10,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        backgroundColor: 'white',
        paddingHorizontal: 10
    }}>
        <Ionicons name="search" size={24} color={'black'} />
                <View>
                    <Text style={{
                        color: 'grey',

                    }}>Pick-up location</Text>
                <TextInput placeholder='Enter pick-up location'  
                    style={{
                        fontFamily:'outfit',
                        fontSize:19
                    }}
                />
                </View>
                
    </View>

    <View style={{
        height: 60,
        marginHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 1,
        backgroundColor: 'white'
    }}>
        <TouchableOpacity style={styles.dateTouchable}
        onPress={handleOpenSelectDate}>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    gap:20,
                    alignItems:'center',
                    height: 50,
                    padding: 10
                }}>
                    <Ionicons name="calendar-outline" size={24} color={'black'} />
                    <View style={{
                        display: 'flex'
                    }}>
                        <Text style={{color: 'grey'}}>Pick-up date</Text>
                        <Text style={{fontSize: 19}}>07/31</Text>
                    </View>
                    
                </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateTouchable}
        onPress={handleOpenSelectDate1}>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    gap:20,
                    alignItems:'center',
                    height: 50,
                    padding: 10
                }}>
                    <Ionicons name="calendar-outline" size={24} color={'black'} />
                    <View style={{
                        display: 'flex'
                    }}>
                        <Text style={{color: 'grey'}}>Drop-off date</Text>
                        <Text style={{fontSize: 19}}>08/02</Text>
                    </View>
                    
                </View>
        </TouchableOpacity>
    </View>
    <TouchableOpacity style={{
        height: 60,
        backgroundColor: Colors.PRIMARY,
        marginHorizontal: 10,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    }}
    onPress={handleSearch}>
        {isSearch && <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>Search</Text>}
        {!isSearch && <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>Back</Text>}
    </TouchableOpacity>
        <View>
        
        </View>
        <View>
            
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
        <Calendar
                    onDayPress={onDayPress}
                    markedDates={selectedDates}
                    markingType={'multi-dot'}
                    style={styles.calendar}
                    theme={{
                        backgroundColor: 'transparent',
                        calendarBackground: 'transparent',
                      }}
                />

        <View style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 30
        }}>
            <TouchableOpacity style={{
                backgroundColor: '#E8E8E8',
                height: 40,
                width: 100,
                alignItems: 'center',
                padding: 10,
                borderRadius: 10
            }}
            onPress={handleSelectDate}>
                <Text>Select Date</Text>
            </TouchableOpacity>
        </View>
        </View>


        
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
        <Calendar
                    onDayPress={onDayPress1}
                    markedDates={selectedDates1}
                    markingType={'multi-dot'}
                    style={styles.calendar}
                    theme={{
                        backgroundColor: 'transparent',
                        calendarBackground: 'transparent',
                      }}
                />

        <View style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 30
        }}>
            <TouchableOpacity style={{
                backgroundColor: '#E8E8E8',
                height: 40,
                width: 100,
                alignItems: 'center',
                padding: 10,
                borderRadius: 10
            }}
            onPress={handleSelectDate}>
                <Text>Select Date</Text>
            </TouchableOpacity>
        </View>
        </View>


        
      </Modal>


    </View>
  )
}

export default VehicleSearchFilter

const styles = StyleSheet.create({
    touchable : {
        width: '25%',
        backgroundColor: 'white',
        borderRadius: 20,
    },
    dateTouchable : {
        width: '50%',
        borderWidth: 1,
        borderColor: Colors.PRIMARY
    },
    modalView: {
        height: 500,
        
        margin: 20,
        marginTop: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 20
      },
})