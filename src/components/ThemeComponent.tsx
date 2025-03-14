import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "~/providers/ThemeProviders";
import { PropsWithChildren } from "react";

export const ThemeComponent: React.FC<PropsWithChildren> = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View className={`flex-1 ${isDarkMode ? "bg-bgDark" : "bg-bgLight"}`}>
      <View className="absolute right-10 top-20 z-10">
        <TouchableOpacity onPress={toggleTheme} className="p-2">
          <Ionicons name={isDarkMode ? "moon" : "sunny"} size={30} color="#37000A" />
        </TouchableOpacity>
      </View>

      <View className="flex-1">{children}</View>

      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </View>
  );
};
