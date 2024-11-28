import React, { useState } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const ExpiryDatePicker = ({ month, setMonth, year, setYear }) => {

  const months = Array.from({ length: 12 }, (_, i) => ({
    label: `${i + 1}`.padStart(2, "0"),
    value: i + 1,
  }));

  const years = Array.from({ length: 20 }, (_, i) => ({
    label: `${new Date().getFullYear() + i}`,
    value: new Date().getFullYear() + i,
  }));

  return (
      <View style={{flexDirection: 'row', width: '100%', height: 60, gap: 10, marginVertical: 10, color: "#A4A4A4"}}>
        <View style={{backgroundColor: "#FAFAFA", width: '50%', borderRadius: 10,}}>
          <RNPickerSelect
            onValueChange={(value) => setMonth(value)}
            items={months}
            placeholder={{ label: "Month", value: null, color: "#A4A4A4"}}
          />
        </View>

        <View style={{backgroundColor: "#FAFAFA", width: '50%', borderRadius: 10, color: "#A4A4A4"}}>
          <RNPickerSelect
            onValueChange={(value) => setYear(value)}
            items={years}
            placeholder={{ label: "Year", value: null }}
            style={{color: "#A4A4A4"}}
          />
        </View>
      </View>
  );
};

export default ExpiryDatePicker;