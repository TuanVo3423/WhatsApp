import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useTailwind } from "tailwind-rn/dist";
import Colors from "../../constants/Colors";

const InputChatBox = () => {
  const tw = useTailwind();
  return (
    <View style={[tw("flex-row justify-between"), {padding : 6}]}>
      <View style={[tw("flex-row flex-1 items-center bg-white rounded-full"),{padding : 8, marginRight : 4}]}>
        <FontAwesome5 name="laugh-beam" size={22} color="grey" />
        <View style={[tw("flex-1"),{margin : 4}]}>
          <TextInput />
        </View>
        <View style={tw("flex-row items-center")}>
          <Entypo style={tw("mr-4")} name="attachment" size={22} />
          <Fontisto name="camera" size={22} />
        </View>
      </View>
      <View
        style={[
          tw("rounded-full flex-row items-center"),
          { backgroundColor: Colors.light.tint, padding: 12 },
        ]}
      >
        <MaterialCommunityIcons name="microphone" size={22} color="white" />
      </View>
    </View>
  );
};

export default InputChatBox;
