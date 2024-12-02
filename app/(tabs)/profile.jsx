import React from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Profile() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);

  const toggleNotifications = () => setIsNotificationsEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3602/3602145.png' }}
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">' }} // Replace with actual user image URL
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Lakruwan Kasun</Text>
          <Text style={styles.profileEmail}>lakruwankasun0407@gmail.com</Text>
        </View>
      </View>

      {/* Options Section */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png' }} // Black lock icon
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Security</Text>
        </TouchableOpacity>

        <View style={styles.option}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3602/3602145.png' }} // Black bell icon
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Get Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
            style={styles.switch}
          />
        </View>

        <TouchableOpacity style={styles.option}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1782/1782765.png' }} // Black mail icon
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828886.png' }} // Black star icon
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Rate this app</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/159/159604.png' }} // Black document icon
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} // Black info icon
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>About Us</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    // paddingTop:20,
    // marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0066ff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 50,
  },
  bellIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
  },
  options: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  switch: {
    marginLeft: 'auto',
    tintColor: '#000',
  },
});
