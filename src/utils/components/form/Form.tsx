import { useState } from 'react';
import { View, Text } from 'react-native';
import { SelectComponent } from './SelectComponent';
import { genderData, rolesData } from '~/utils/data';
import { CheckboxComponent } from '../Checkbox';

export const FormComponent = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <View className="p-5">
      {/* <InputComponent
        label="Username"
        value={username}
        onChangeText={setUsername} // Updates state as user types
        placeholder="Enter your username"
      />
      <InputComponent
        label="Password"
        value={password}
        onChangeText={setPassword} // Updates state as user types
        placeholder="Enter your password"
        secureTextEntry // Hide password
      /> */}
      <Text className="text-md my-3 font-bold color-slate-500">Select your gender</Text>
      <SelectComponent data={genderData} placeholder={'gender'} />
      <Text className="text-md my-3 font-bold color-slate-500">Select your role</Text>
      <SelectComponent data={rolesData} placeholder={'roles'} />
      <CheckboxComponent/>
    </View>
  );
};
