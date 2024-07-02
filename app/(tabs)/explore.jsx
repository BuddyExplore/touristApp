import { View, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Home/Header';
import LandMarks from '../../components/Home/LandMarks';
import Activities1 from '../../components/Home/Activities';
import PlanTrip from '../../components/Home/PlanTrip';
import Prefernces from '../../components/Home/Prefernces';
import { FAB, Portal, Provider, Menu } from 'react-native-paper';
import { Colors } from '../../constants/Colors'

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

        </ScrollView>

        <Portal>
          <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={openMenu}
            rippleColor = 'white'
          />
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={{ x: 300, y: 650 }} // Adjust the position as needed
          >
            <Menu.Item onPress={() => {}} title="Plan my next trip" />
            <Menu.Item onPress={() => {}} title="Add new location" />
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
    backgroundColor: Colors.SECOND,
    color: 'white'
  },
});
