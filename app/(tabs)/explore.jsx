import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import LandMarks from '../../components/Home/LandMarks'
import Activities1 from '../../components/Home/Activities'
import PlanTrip from '../../components/Home/PlanTrip'
import Prefernces from '../../components/Home/Prefernces'

export default function home() {
  return (
    <ScrollView>
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
  )
}