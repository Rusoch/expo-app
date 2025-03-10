import { Text, View } from "react-native";
import { EditScreenInfo } from "./EditScreenInfo";
import { useTheme } from "~/providers/ThemeProviders"; // Assuming you have a context or provider for theme

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, children }: ScreenContentProps) => {
  const { isDarkMode } = useTheme();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className={`text-3xl font-bold ${isDarkMode ? "text-textColorD" : "text-textColorL"}`}>
        {title}
      </Text>
      <View className="my-7 h-[1px] w-4/5 bg-red-200" />
      <EditScreenInfo />
      {children}
    </View>
  );
};
