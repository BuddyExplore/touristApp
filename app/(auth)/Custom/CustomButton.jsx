import {Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native';

const Button = (props) => {
  const filledBgColor = props.color || Colors.PRIMARY;
  const outlinedColor = 'white';
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? 'white' : Colors.PRIMARY;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style
      }}
      onPress={props.onPress}
    >

      <Text style={{ fontSize: 18, ...{ color: textColor } }}>{props.title}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 19,
    borderColor: Colors.PRIMARY,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }



});



export default Button