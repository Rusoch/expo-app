import { Text, View } from 'react-native';
import { FormComponent } from './form/Form';

export const EditScreenInfo = () => {
  const title = 'For signing up please fill the form out';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View>
      <View className="mx-12 items-center">
        <Text className="text-center text-lg leading-6">{title}</Text>
        <View className="my-2 rounded-md px-1">
          <FormComponent/>
        </View>
        <Text className="bg-pink-500 text-center text-lg leading-6">{description}</Text>
      </View>
    </View>
  );
};
