import { View, Text,  TouchableOpacity, StyleSheet, Image , Modal , KeyboardAvoidingView} from 'react-native';
import React , {useState, useEffect , useRef} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function VehicleModalStep3({ vehicleInfo }) {
    const ref = useRef();
    return(
        <View>
            
            <GooglePlacesAutocomplete
                  placeholder="Search Place"
                  ref={ref}
                  fetchDetails={true}
                  keepResultsAfterBlur={true}
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    if (details) {


                      ref.current?.setAddressText(data.description);  
                      console.log(data.description);
                    
                      

                      
                    }
                  }}
                  query={{
                    key: 'AIzaSyDofkc5Z7HDVVGwEzfklEcVrtNcwLWYLhk',
                    language: 'en',
                    components: 'country:lk'
                  }}
                  styles={{
                    container: styles.autocompleteContainer,
                    listView: styles.listView,
                    textInput: styles.textInput,
                  }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    autocompleteContainer: {
        zIndex: 1,
        height: 50,
        marginBottom: 20,
        marginTop: 20
      },
      textInput: {
        backgroundColor: '#FFFFFF',
        height: 44,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '100%',
        zIndex: 2,
      },
      listView: {
        position: 'absolute',
        top: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        zIndex: 9999,
      },
   
  
});