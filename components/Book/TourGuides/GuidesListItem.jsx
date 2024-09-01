import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
  } from 'react-native';
  import React, { useState } from 'react';
  import GuideModal from './GuideModal1';
  import Ionicons from '@expo/vector-icons/Ionicons';
  
  export default function GuidesListItem({ prefernce }) {
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
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={handleShowModal}
        >
          <View style={styles.rowContainer}>
            <Image
              source={prefernce.img}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>{prefernce.name}</Text>
              <Image
                source={require('../../../assets/images/Book/4star.png')}
                style={styles.ratingImage}
              />
              <View style={styles.langContainer}>
                <Ionicons name="globe-outline" size={16} color={"grey"} style={styles.icon} />
                <Text style={styles.subText}>{prefernce.lang}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward-outline" size={16} color={"#878787"} style={styles.arrowIcon} />
          </View>
        </TouchableOpacity>
  
        {showModal && (
          <GuideModal
            guideInfo={prefernce}
            visibility={showModal}
            closeModal={handleCloseModal}
          />
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    touchable: {
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 15,
    },
    textContainer: {
      flex: 1,
    },
    mainText: {
      color: 'black',
      fontSize: 19,
      fontWeight: 'bold',
    },
    ratingImage: {
      width: 70,
      height: 20,
      marginVertical: 5,
    },
    langContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 5,
    },
    subText: {
      color: 'grey',
      fontSize: 12,
    },
    arrowIcon: {
      marginLeft: 10, 
    },
  });
  