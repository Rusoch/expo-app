import { useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  LayoutChangeEvent,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

type OptionItem = {
  value: string;
  label: string;
};

interface SelectComponentProps {
  data: OptionItem[];
  placeholder: string;
}

export const SelectComponent = ({ data, placeholder }: SelectComponentProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = useCallback(() => setExpanded((prev) => !prev), []);
  const [value, setValue] = useState("");
  const buttonRef = useRef<View>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });

  const onSelect = useCallback((item: OptionItem) => {
    setValue(item.label);
    setExpanded(false);
  }, []);

  const onButtonLayout = (event: LayoutChangeEvent) => {
    buttonRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setDropdownPosition({ top: pageY + height + 5, left: pageX, width });
    });
  };

  return (
    <View className="w-full">
      {/* Select Button */}
      <TouchableOpacity
        onPress={toggleExpanded}
        activeOpacity={0.8}
        ref={buttonRef}
        onLayout={onButtonLayout}
        className="w-full flex-row items-center justify-between rounded-2xl bg-slate-300 p-4"
      >
        <Text className="text-xl font-bold text-slate-500">{value || placeholder}</Text>
        <AntDesign name={expanded ? "caretup" : "caretdown"} size={16} color="gray" />
      </TouchableOpacity>

      <Modal
        visible={expanded}
        transparent
        animationType="fade"
        onRequestClose={() => setExpanded(false)}
      >
        <TouchableWithoutFeedback onPress={() => setExpanded(false)} accessible={false}>
          <View className="flex-1 bg-black/50">
            <View
              style={{
                position: "absolute",
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                width: dropdownPosition.width,
              }}
            >
              <FlatList
                keyExtractor={(item) => item.value}
                data={data}
                keyboardShouldPersistTaps="handled"
                renderItem={({ item }) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onSelect(item)}
                    className="mb-1 rounded-2xl bg-slate-200 p-3"
                  >
                    <Text className="text-lg">{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
