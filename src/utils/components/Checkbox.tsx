import React, { useState, useRef } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';

export const CheckboxComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setIsChecked(!isChecked);

    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 1, duration: 350, useNativeDriver: true }), // Move right
      Animated.timing(shakeAnim, { toValue: -1, duration: 350, useNativeDriver: true }), // Move left
    ]).start();
  };

  return (
    <Pressable onPress={handlePress} className="align-center my-2 flex flex-row justify-center">
      <View className="border-2-gray align-center mr-2 h-[24px] w-[24px] justify-center border">
        {isChecked && <Text>✔️</Text>}
      </View>
      <Animated.Text style={[{ transform: [{ translateX: shakeAnim }] }]}>
        Save this info
      </Animated.Text>
    </Pressable>
  );
};
