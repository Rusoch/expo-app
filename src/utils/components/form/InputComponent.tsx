import React from 'react';
import { TextInput, Text, View, useColorScheme } from 'react-native';
import { useRef } from 'react';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

export const InputComponent: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  label,
  secureTextEntry,
}) => {
  const colorScheme = useColorScheme(); // Detects system theme (light or dark)
  const theme = colorScheme === 'dark' ? 'dark' : 'light';
  const inputRef = useRef<TextInput>(null);

  // Focus the input when the component mounts
  React.useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <View className="mb-4 w-full">
      <Text className="mb-2 text-sm font-semibold text-[var(--color-dark-default)] dark:text-[var(--color-light-default)]">
        {label}
      </Text>
      <TextInput
        value={value} // Bind state value
        onChangeText={onChangeText} // Update state when text changes
        placeholder={placeholder}
        placeholderTextColor={theme === 'dark' ? '#aaa' : '#888'} // Light/dark theme placeholder text color
        secureTextEntry={secureTextEntry}
        ref={inputRef}
        className={`
          rounded-md 
          border 
          p-3 
          ${theme === 'dark' ? 'border-[#444444] bg-[#333333]' : 'border-[#CCCCCC] bg-[#F1F1F1]'} 
          text-base 
          text-[var(--color-dark-default)] 
          dark:text-[var(--color-light-default)]
        `}
      />
    </View>
  );
};
