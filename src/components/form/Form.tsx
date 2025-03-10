import { View, Text } from "react-native";
import { SelectComponent } from "./SelectComponent";
import { genderData, rolesData } from "~/utils/data";
import { CheckboxComponent } from "../Checkbox";
import { useTheme } from "~/providers/ThemeProviders";

export const FormComponent = () => {
  const { isDarkMode } = useTheme();
  return (
    <View>
      <Text
        className={`text-md my-3 font-bold ${isDarkMode ? "text-textColorD" : "text-textColorL"}`}
      >
        Select your gender
      </Text>
      <SelectComponent data={genderData} placeholder={"gender"} />

      <Text
        className={`text-md my-3 font-bold ${isDarkMode ? "text-textColorD" : "text-textColorL"}`}
      >
        Select your role
      </Text>
      <SelectComponent data={rolesData} placeholder={"roles"} />

      <CheckboxComponent />
    </View>
  );
};
