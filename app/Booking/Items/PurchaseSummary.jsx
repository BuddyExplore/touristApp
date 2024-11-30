import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, Modal } from 'react-native'
import React, {useState} from 'react'
import { useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const shopsList = [
  {id: 0, name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.jpg'), city: 'Kandy'  },
  {id: 1, name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.jpg'), city: 'Colombo'  },
  {id: 2, name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/Royal Batiks.jpg'), city: 'Anuradhapura' },
  {id: 3, name: 'Lakpahana', img:require('../../../assets/images/ShopItems/Lakpahana.jpg'), city: 'Kandy'  },
  {id: 4, name: 'Laksala', img:require('../../../assets/images/ShopItems/Laksala.jpg'), city: 'Colombo'  },
  {id: 5, name: 'Royal Batiks', img:require('../../../assets/images/ShopItems/Royal Batiks.jpg'), city: 'Anuradhapura' },
];

const itemsList = [
  {id: 0, name: 'SLtshirt', img:require('../../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
  {id: 1, name: 'Trouser', img:require('../../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
  {id: 2, name: 'BatikShirt', img:require('../../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
  {id: 3, name: 'Hat', img:require('../../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
  {id: 4, name: 'Saree', img:require('../../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
  {id: 5, name: 'Sarong', img:require('../../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
  {id: 6, name: 'SLtshirt', img:require('../../../assets/images/ShopItems/SLtshirt.jpg'), price: 4500.00, city: 'Colombo'  },
  {id: 7, name: 'Trouser', img:require('../../../assets/images/ShopItems/Trouser.jpg'), price: 7500.00, city: 'Kandy'  },
  {id: 8, name: 'BatikShirt', img:require('../../../assets/images/ShopItems/BatikShirt.jpg'), price: 4500.00, city: 'Gampaha'  },
  {id: 9, name: 'Hat', img:require('../../../assets/images/ShopItems/Hat.jpg'), price: 3000.00, city: 'Dambulla'  },
  {id: 10, name: 'Saree', img:require('../../../assets/images/ShopItems/Saree.jpg'), price: 11769.00, city: 'Anuradhapura'  },
  {id: 11, name: 'Sarong', img:require('../../../assets/images/ShopItems/Sarong.jpg'), price: 4777.00, city: 'Anuradhapura'  },
];

const PurchaseSummary = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const shopInfo = shopsList[0];
  const itemInfo = itemsList[2];

  const goToHome = () => {
    router.push('/');
  };

  const handleConfirm = () => {
    setIsModalVisible(true);
  }


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}> 
        <Text style={{fontSize: 22, fontWeight: '500'}}>Purchase Summary</Text>
        <Image source={require('../../../assets/images/Book/Vehicles/summary.png')} style={{height: 30, width: 26}}/>
      </View>

      {/* Item */}
      <View style={styles.viewPart}>

        <View style={styles.subHeader2}>
        <Ionicons name="bag-handle-outline" size={24} color={"black"} />
          <Text style={{fontSize: 16, fontWeight: '500'}}>Item</Text>
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 36, marginTop: 8}}>
        <View style={{height: 79 , width: 99, borderRadius: 10}}>
          <Image source={itemInfo.img} style={{maxWidth: '100%', maxHeight: '100%', borderRadius: 10}}/>
        </View>

        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{marginLeft: 22, gap: 5}}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>{itemInfo.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, color: '#878787'}}>{`LKR ${itemInfo.price}.00`}</Text>
            </View>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center', borderRadius: 40, backgroundColor: "#E2F8FF", paddingHorizontal: 10, paddingVertical: 5, marginRight: 10}}>
            <Text style={{fontSize: 10, color: Colors.PRIMARY}}>Picked</Text>
          </View>
        </View>
        </View>

      </View>

      {/* Shop */}
      <View style={styles.viewPart}>

        <View style={styles.subHeader2}>
          <Ionicons name="bag-handle-outline" size={24} color={"black"} />
          <Text style={{fontSize: 16, fontWeight: '500'}}>Shop</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 36, marginTop: 8}}>
          <View style={{height: 79 , width: 99, borderRadius: 10}}>
            <Image source={shopInfo.img} style={{width: '100%', height: '100%', borderRadius: 10}}/>
          </View>

          <View style={{marginLeft: 22, gap: 5}}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>{shopInfo.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <SimpleLineIcons name="location-pin" size={12} color="#878787" />
              <Text style={{fontSize: 12, color: "#878787"}}>{shopInfo.city}</Text>
            </View>
          </View>
        </View>

      </View>

      {/* Trip Dates & Times */}
      <View style={styles.viewPart}>

        <View style={styles.subHeader}>

          <View style={styles.subHeader2}>
            <MaterialIcons name="list-alt" size={24} color="black" />
            <Text style={{fontSize: 16, fontWeight: '500'}}>Personal Information</Text>
          </View>

          <Pressable style={{marginRight: 10}} onPress={() => {}}>
              <AntDesign name="edit" size={18} color={Colors.PRIMARY} />
          </Pressable>

        </View>

        <View style={{paddingTop: 10, paddingHorizontal: 20}}> 

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: '#969696', fontWeight: '300'}}>Full Name :</Text>
            <Text style={{fontWeight: '500'}}>David Adams</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: '#969696', fontWeight: '300'}}>Email :</Text>
            <Text style={{fontWeight: '500'}}>david.adams@gmail.com</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: '#969696', fontWeight: '300'}}>Contact No :</Text>
            <Text style={{fontWeight: '500'}}>+1 111 476 289 329</Text>
          </View>

        </View>

      </View>

      {/* Payement Information */}
      <View style={styles.viewPart}>

        <View style={styles.subHeader}>

          <View style={styles.subHeader2}>
            <Ionicons name="card-outline" size={24} color="black" />
            <Text style={{fontSize: 16, fontWeight: '500'}}>Payment Information</Text>
          </View>

          <Pressable style={{marginRight: 10}} onPress={() => {}}>
            <AntDesign name="edit" size={18} color={Colors.PRIMARY} />
          </Pressable>

        </View>

        <View style={{paddingHorizontal: 20, marginTop: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap : 10}}>
            <View style={{height: 30, width: 60,}}>
              <Image style={{height: '100%', maxWidth: '100%'}} source={require('../../../assets/logo/visa.png')} />
            </View>
          <Text style={{fontSize: 14, fontWeight: '400'}}>- - - 4756</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={{fontWeight: '600', color: Colors.PRIMARY}}>LKR</Text>
            <Text style={{fontWeight: '600', color: Colors.PRIMARY}}>{itemInfo.price}</Text>
          </View>
        </View>

      </View>

      <View style={styles.continueBtn}>
        <TouchableOpacity style={{borderRadius: 40, backgroundColor: Colors.PRIMARY, paddingVertical: 15, paddingHorizontal: 40, width: '70%'}} 
        onPress={handleConfirm}>
          <Text style={{fontSize: 16, fontWeight: 500, color: '#fff', textAlign: 'center'}}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            
            <View style={{marginVertical: 10}}>
              <AntDesign name="checkcircle" size={50} color={Colors.PRIMARY} />
            </View>

            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>Payment Completed!</Text>
            </View>

            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, fontWeight: '300', color: '#676666', textAlign: 'center'}}>
              Item has been reserved. Go to Bookings to find more information.
              </Text>
            </View>

            <TouchableOpacity style={{marginTop: 30, marginBottom: 8, backgroundColor: Colors.PRIMARY, paddingVertical: 12, paddingHorizontal: 20, borderRadius: 19}}
              onPress={() => {}}
            >
              <Text style={{fontSize: 15, fontWeight: '500', color: '#FFFFFF'}}>View My Bookings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding: 10}} onPress={goToHome}>
              <Text style={{fontSize: 15, fontWeight: '500', color: Colors.PRIMARY}}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default PurchaseSummary

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 7, 
    marginTop: 8
  },
  continueBtn : {
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    paddingBottom: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 20
  },
  subHeader: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  subHeader2: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10, 
    padding: 10
  },
  viewPart: {
    marginTop: 7,
    paddingBottom: 22,
    borderBottomColor: '#D4D4D4',
    borderBottomWidth: 1
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    width: 315,
    height: 360,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
})