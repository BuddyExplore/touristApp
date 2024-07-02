import { View, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Home/Header';
import LandMarks from '../../components/Home/LandMarks';
import Activities1 from '../../components/Home/Activities';
import PlanTrip from '../../components/Home/PlanTrip';
import Prefernces from '../../components/Home/Prefernces';
import { FAB, Portal, Provider, Menu } from 'react-native-paper';
import { Colors } from '../../constants/Colors';

export default function Home() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* header */}
          <Header />

          {/* Popular landmarks List */}
          <LandMarks />

          {/* Activities list */}
          <Activities1 />

          {/* Prefernces List */}
          <Prefernces />

          {/* Plan your next trip */}
          <PlanTrip />
        </ScrollView>

        <Portal>
          <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={openMenu}
          />
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={{ x: 300, y: 650 }} // Adjust the position as needed
            style={styles.menu} // Apply custom menu style
          >
            <Menu.Item
              onPress={() => {}}
              title="Plan your next trip"
              style={styles.menuItem} // Apply custom menu item style
              titleStyle={styles.menuItemText} // Custom text style for menu item
            />
            <Menu.Item
              onPress={() => {}}
              title="Add new location"
              style={styles.menuItem} // Apply custom menu item style
              titleStyle={styles.menuItemText} // Custom text style for menu item
            />
          </Menu>
        </Portal>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 100, // To prevent content from being hidden behind FAB
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.SECOND
  },
  menu: {
    backgroundColor: Colors.SECOND, // Custom background color
    width: 150, // Custom width
    height: 'auto', // Custom height, adjust as needed
  },
  menuItem: {
    backgroundColor: '#f0f0f0', // Custom background color for menu item
    height: 50, // Custom height for menu item, adjust as needed
  },
  menuItemText: {
    color: Colors.PRIMARY, // Custom text color for menu item
  },
});

