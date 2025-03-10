import React, { useState, useRef } from "react";
import { View, Text, Pressable, Animated } from "react-native";
import { useTheme } from "../components/shared/providers/ThemeProviders";

export const CheckboxComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const { isDarkMode } = useTheme();

  const handlePress = () => {
    setIsChecked(!isChecked);

    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 1, duration: 350, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -1, duration: 350, useNativeDriver: true }),
    ]).start();
  };

  return (
    <Pressable
      onPress={handlePress}
      className="align-center my-2 mt-10 flex flex-row justify-center"
    >
      <View className="border-2-gray align-center color-textColor mr-2 h-[24px] w-[24px] justify-center border ">
        {isChecked && (
          <Text  className={`text-xl font-bold bg-bgSelectL ${isDarkMode ? "text-textColorD" : "text-textColorL"}`}>✔️</Text>
        )}
      </View>
      <Animated.Text style={[{ transform: [{ translateX: shakeAnim }] }]}>
        <Text
          className={`text-xl font-bold ${isDarkMode ? "text-textColorD" : "text-textColorL"}`}
        >
          Save this info
        </Text>
      </Animated.Text>
    </Pressable>
  );
};
