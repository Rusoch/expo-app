import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from './providers/ThemeProviders';
import { PropsWithChildren } from 'react';

export const ThemeComponent: React.FC<PropsWithChildren> = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View className={`flex-1 items-center justify-center ${isDarkMode ? 'bg-[#494F55]' : 'bg-[#F3F6FF]'}`}>
      {/* Toggle Button */}
      <View className="absolute right-10 top-20 z-10">
        <TouchableOpacity onPress={toggleTheme} className="p-2">
          <Ionicons name={isDarkMode ? 'moon' : 'sunny'} size={30} color="#37000A" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View>
        <Text className={`${isDarkMode ? 'text-black' : 'text-green-600'}`}>{children}</Text>
      </View>

      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
};
