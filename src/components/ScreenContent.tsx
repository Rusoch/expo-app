import { Text, View } from 'react-native';
import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title,children }: ScreenContentProps) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">{title}</Text>
      <View className="my-7 h-[1px] w-4/5 bg-red-200" />
      <EditScreenInfo />
      {children}
    </View>
  );
};
