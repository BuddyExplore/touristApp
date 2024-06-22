import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import LandMarks from '../../components/Home/LandMarks'
import Activities from '../../components/Home/Activities'
import PlanTrip from '../../components/Home/PlanTrip'

export default function home() {
  return (
    <View>
      {/* header */}
      <Header />

      {/* Popular landmarks List */}
      <LandMarks />

      {/* Activities List */}
      <Activities />

      {/* Plan your next trip */}
      <PlanTrip />

    </View>
  )
}