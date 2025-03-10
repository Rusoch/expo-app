import { View, Text } from 'react-native';
import { SelectComponent } from './SelectComponent';
import { genderData, rolesData } from '~/utils/data';
import { CheckboxComponent } from '../Checkbox';

export const FormComponent = () => {

  return (
    <View>
      <Text className="text-md my-3 font-bold color-slate-500">Select your gender</Text>
      <SelectComponent data={genderData} placeholder={'gender'} />
      <Text className="text-md my-3 font-bold color-slate-500">Select your role</Text>
      <SelectComponent data={rolesData} placeholder={'roles'} />
      <CheckboxComponent/>
    </View>
  );
};
