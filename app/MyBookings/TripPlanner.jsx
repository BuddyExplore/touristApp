import { router, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ProgressBarAndroid,
} from 'react-native';

const TripPlanner = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState(1);
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState([]);

  const interestOptions = [
    'Religious',
    'Points of Interests',
    'Historical',
    'Beaches',
    'Viewpoints',
    'Nature & Wildlife',
  ];

  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((item) => item !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSubmit = async () => {
    () => router.push('./result')
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Destination 📍</Text>
            <Text style={styles.description}>
              Enter the desired destination you are planning to visit.
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter destination"
              value={location}
              onChangeText={setLocation}
            />
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => setStep(2)}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Duration ⏱️</Text>
            <Text style={styles.description}>
              Enter the duration you are planning to spend on the trip in days.
            </Text>
            <View style={styles.durationContainer}>
              <TouchableOpacity
                style={styles.durationButton}
                onPress={() => setDuration((prev) => Math.max(prev - 1, 1))}
              >
                <Text style={styles.durationButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.durationText}>{duration}</Text>
              <TouchableOpacity
                style={styles.durationButton}
                onPress={() => setDuration((prev) => prev + 1)}
              >
                <Text style={styles.durationButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => setStep(3)}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Budget 💰</Text>
            <Text style={styles.description}>
              Enter the budget you are planning to spend on the trip. - in USD
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter budget"
              keyboardType="numeric"
              value={budget}
              onChangeText={setBudget}
            />
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => setStep(4)}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        );
      case 4:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Interests 🗒️</Text>
            <Text style={styles.description}>
              Select the categories you are interested in exploring.
            </Text>
            <View style={styles.interestsContainer}>
              {interestOptions.map((interest) => (
                <TouchableOpacity
                  key={interest}
                  style={[
                    styles.interestButton,
                    interests.includes(interest) && styles.interestButtonActive,
                  ]}
                  onPress={() => toggleInterest(interest)}
                >
                  <Text
                    style={[
                      styles.interestText,
                      interests.includes(interest) && styles.interestTextActive,
                    ]}
                  >
                    {interest}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => {
                    // handleSubmit(); // Call your function
                    router.push('./result'); // Navigate to the results page
                }}
                >
                <Text style={styles.nextButtonText}>Generate Plan</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };


  const router = useRouter(); // Get the router object


  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBarAndroid
        styleAttr="Horizontal"
        color="#0A89FF"
        indeterminate={false}
        progress={step / 4}
      />
      {/* Step Content */}
      {renderStep()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  stepContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  nextButton: {
    marginTop: 10,
    backgroundColor: '#0A89FF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  durationButton: {
    padding: 10,
    backgroundColor: '#0A89FF',
    borderRadius: 8,
    marginHorizontal: 10,
  },
  durationButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  durationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  interestButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
  },
  interestButtonActive: {
    backgroundColor: '#0A89FF',
    borderColor: '#0A89FF',
  },
  interestText: {
    color: '#555',
  },
  interestTextActive: {
    color: '#fff',
  },
});

export default TripPlanner;
