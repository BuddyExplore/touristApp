import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../constants/Colors';
import PlacesListItem from './PlacesListItem';
import GuidesList from './GuidesList';

export default function PlacesList() {
  const preferencesList = [
    { name: 'Isurumuniya Temple', available: '21', img: require('../../../assets/images/Book/Tourguides/places/place1.jpg') },
    { name: 'Jethawanaramaya', available: '12', img: require('../../../assets/images/Book/Tourguides/places/place2.jpg') },
    { name: 'Mihintale', available: '8', img: require('../../../assets/images/Book/Tourguides/places/place3.jpg') },
    { name: 'Ritigala Forest Monastery', available: '4', img: require('../../../assets/images/Book/Tourguides/places/place4.jpg') },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = (itemName) => {
    if (itemName === 1) {
      setShowModal(false);
    }
  };

  return (
    <View>
      {showModal && (
        <GuidesList
          placeInfo={preferencesList}
          visibility={showModal}
          closeModal={handleCloseModal}
        />
      )}
      <View
        style={{
          padding: 20,
          paddingBottom: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 1,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: 'outfit-bold' }}>Book Tour Guide</Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: 'outfit-medium' }}>View all</Text>
      </View>

      {preferencesList.map((item, index) => (
        <PlacesListItem
          placeInfo={item}
          key={index}
          onPress={() => handleShowModal(item)}
        />
      ))}
    </View>
  );
}
