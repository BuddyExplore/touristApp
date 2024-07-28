import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Colors } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
  
  const HomeScreen = ({hotelInfo , onPress}) => {

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


    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
  

    handleNext = (itemName) => {
        onPress(1);
    }

    return (
      <View style={{padding: 35}}>
            <View style={{
                backgroundColor: '#f7f7f7',
                width: '100%',
                alignItems: 'center',
                marginTop:10,
                marginBottom: 20, 
                borderRadius: 12
            }}>
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 20,
                    height: 40
                }}>
                    <Text><Ionicons name="calendar-clear-outline" size={17}/></Text> 
                    <Text style={{fontSize: 17 , fontWeight: 'bold'}}>Select Dates</Text>
                
                </View>
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
            </View>
                      
            <View style={{
                backgroundColor: '#f7f7f7',
                width: '100%',
                alignItems: 'center',
                marginTop:10,
                marginBottom: 20, 
                borderRadius: 12
            }}>
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 20,
                    height: 40
                }}>
                    <Text><Ionicons name="person-outline" size={17}/></Text> 
                    <Text style={{fontSize: 17 , fontWeight: 'bold'}}>Select People</Text>
                
                </View>

                <View
                style={{
                    flexDirection: "row",
                    width: '60%',
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 5,
                }}
                >
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
              
                <TouchableOpacity
                  onPress={() => setAdults(Math.max(1, adults - 1))}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                    // justifyContent: "center",
                    // alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "800",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
  
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      fontWeight: "500",
                      paddingHorizontal: 6,
                    }}
                  >
                    {adults}
                  </Text>
                </TouchableOpacity>
  
                <TouchableOpacity
                  onPress={() => setAdults(adults + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "500",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              
            </View>

            
            <View
                style={{
                    flexDirection: "row",
                    width: '60%',
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                }}
                >
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
              
                <TouchableOpacity
                  onPress={() => setChildren(Math.max(1, adults - 1))}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                    // justifyContent: "center",
                    // alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "800",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
  
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      fontWeight: "500",
                      paddingHorizontal: 6,
                    }}
                  >
                    {children}
                  </Text>
                </TouchableOpacity>
  
                <TouchableOpacity
                  onPress={() => setChildren(adults + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "500",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              
            </View>
                
            </View>

            <View style={{
                width: '100%',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={[styles.editButton, styles.buttonClose]}
                    onPress = {handleNext}
                    >
                    <Text style={styles.buttonTxt}>Search Availability</Text>
                </TouchableOpacity>
            </View>
            
      </View>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    calendar: {
        width: '90%', // 90% of the screen width
        backgroundColor: 'transparent',
      },
      editButton: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: Colors.PRIMARY,
        height: 40,
        width: 210,
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
  });
  