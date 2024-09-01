import { View, Text,  TouchableOpacity, StyleSheet, Image , Modal , KeyboardAvoidingView} from 'react-native';
import React , {useState, useEffect , useRef} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/Colors';
import MapView , {Callout, Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function TourGuideModalStep2({ guideInfo , onPress }) {


  
  const ref = useRef();
  const [locationName, setLocationName] = useState('Thummulla , Cargills');

  const INITIAL_REGION = {
    latitude: 7.87,
    longitude:  80.77,
    latitudeDelta: 2,
    longitudeDelta: 2
  }

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: null,
    longitudeDelta: null,
  });
    handleNext = (itemName) => {
      const data = {
        step : 2,
        location: locationName,
      }
        onPress(data);
    }

    handleSelectPlace = (lat,lon,latD, lonD) => {
      setLocation({
        latitude: lat,
        longitude: lon,
        latitudeDelta : latD,
        longitudeDelta : lonD,
      });
    }


    return(
        <View>
            <View style={{
              width: '100%',
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.FIFTH,
              marginTop: 20
            }}>
              <Text style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>Select Starting Location</Text>
              
            </View>
            
            <View style={{
              height: '75%'
            }}>

            <GooglePlacesAutocomplete
                  placeholder="Search"
                  ref={ref}
                  fetchDetails={true}
                  keepResultsAfterBlur={true}
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    if (details) {
                      const { lat, lng } = details.geometry.location;
                      const { northeast, southwest } = details.geometry.viewport;
                      const latitudeDelta = Math.abs(northeast.lat - southwest.lat);
                      const longitudeDelta = Math.abs(northeast.lng - southwest.lng);
        

                      ref.current?.setAddressText(data.description);  
                      handleSelectPlace( lat, lng, latitudeDelta, longitudeDelta);
                      setLocationName(data.description);
                      console.log(data.description);
                    
                      

                      
                    }
                  }}
                  query={{
                    key: 'AIzaSyDofkc5Z7HDVVGwEzfklEcVrtNcwLWYLhk',
                    language: 'en',
                  }}
                  styles={{
                    container: styles.autocompleteContainer,
                    listView: styles.listView,
                  }}
                />
             <MapView style={styles.map} provider={PROVIDER_GOOGLE}
               initialRegion={INITIAL_REGION}
               showsUserLocation
               showsMyLocationButton>
               
               {location.latitude && <Marker coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }} />
               }
               
             
            </MapView>
            </View>
            
            <View style={{
                width: '100%',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={[styles.editButton, styles.buttonClose]}
                    onPress = {handleNext}
                    >
                    <Text style={styles.buttonTxt}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    map: {
      height: "100%",
      width: '100%',
      zIndex: -1
    },
    autocompleteContainer: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      zIndex: 1, // Ensure it is on top of other elements
  
    },
    listView: {
      position: 'absolute',
      top: 40,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#ddd',
      zIndex: 2,
    },
 

  editButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    height: 40,
    width: 170,
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