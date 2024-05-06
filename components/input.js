import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function InputTemp() {
  const [temperature, setTemperature] = useState('');
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const handleTempChange = (text) => {
    setTemperature(text);
  };

  const toggleTempUnit = () => {
    setIsFahrenheit(!isFahrenheit);
  };

  const convertedTemp = `${
    isFahrenheit
      ? ((temperature * 9) / 5 + 32).toFixed(2)
      : ((temperature - 32) * 5 / 9).toFixed(2)
  }${isFahrenheit ? '°F' : '°C'}`;

  const isValidTemperature = temperature !== '' && !isNaN(temperature);

  let tempDescription = '';
  let bgColor = styles.defaultBg;

  if (isValidTemperature) {
    const temp = parseFloat(convertedTemp);
    if (isFahrenheit) {
      if (temp < 20) {
        tempDescription = 'Very Cold!!! ❄️';
        bgColor = styles.coldBg;
      } else if (temp < 40) {
        tempDescription = 'Cold!!! 🧊';
        bgColor = styles.coldBg;
      } else if (temp < 70) {
        tempDescription = 'warm🌺';
        bgColor = styles.warmBg; // Set the warm background color
      } else if (temp < 90) {
        tempDescription = 'hot!!! 🏖️';
        bgColor = styles.hotBg;
      } else {
        tempDescription = 'very hot!!!🌞';
        bgColor = styles.hotBg;
      }
    } else {
      if (temp < -6.67) {
        tempDescription = 'Very Cold!!! ❄️';
        bgColor = styles.coldBg;
      } else if (temp < 4.44) {
        tempDescription = 'Cold!!! 🧊';
        bgColor = styles.coldBg;
      } else if (temp < 21.11) {
        tempDescription = 'warm🌺';
        bgColor = styles.warmBg; // Set the warm background color
      } else if (temp < 32.22) {
        tempDescription = 'hot!!! 🏖️';
        bgColor = styles.hotBg;
      } else {
        tempDescription = 'very hot!!!🌞';
        bgColor = styles.hotBg;
      }
    }
  }

  return (
    <>
      <View style={[styles.container, bgColor]}>
        {isValidTemperature && (
          <View style={styles.resultText}>
            <Text style={styles.resultTextChild}>{convertedTemp}</Text>
            <Text style={styles.resultTextChild}>{tempDescription}</Text>
          </View>
        )}
        <View style={styles.flex}>
          <TextInput
            placeholder="Insert Some Temperature... "
            style={styles.input}
            onChangeText={handleTempChange}
            value={temperature}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.circleTemp} onPress={toggleTempUnit}>
            <Text style={styles.circleTempText}>{isFahrenheit ? '°F' : '°C'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '250px',
    outline: 'none', 
  },
   circleTemp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    borderWidth: 1,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 0, 
    marginTop: -5,
    marginLeft: 10
  },
  circleTempText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 45,
    marginLeft: -5,
    fontWeight: 'bold',
    letterSpacing: 3
  },
  defaultBg: {
    backgroundColor: '#F5F5F5', // Off-white color
  },
  hotBg: {
    backgroundColor: '#FF3D33',
  },
  coldBg: {
    backgroundColor: '#2E8BC0',
  },

  resultText: {
    position: 'absolute',
    top: 150,
    textAlign: 'center'
  },
   resultTextChild: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
   warmBg: {
    backgroundColor: '#D6C41C', 
  },
 
});
