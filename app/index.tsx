import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import React, {useState, useEffect} from "react";
import * as Font from 'expo-font';

export default function Index() {

  const [fontLoaded, setFontLoaded] = React.useState(false)

  React.useEffect(() => {
    Font.loadAsync({
      'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
      'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'), 
      'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf')
    })
    .then(() => {
     setFontLoaded(true)
    }) 
  }, [])

  if (!fontLoaded) return null

  return <Redirect href={'/explore'} />
}
