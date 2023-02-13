import { View, Text, Image } from "react-native";
import React from "react";
import { User } from "../../types";
import { useTailwind } from "tailwind-rn/dist";

type props = {
  User: User;
};
const ContactListItem = ({ User }: props) => {
  const tw = useTailwind();
  return (
    <View style={[tw("flex-row items-center"), { height: 70, marginBottom : 20 }]}>
      <Image
        source={{ uri: User.imageUri }}
        style={[{ height: 70, width: 70 }, tw("rounded-full mr-5")]}
      />
      <View style={tw("")}>
        <Text style={tw("font-bold text-xl")}>{User.name}</Text>
        <Text style={tw("text-gray-500 text-lg")}>{User.status}</Text>
      </View>
    </View>
  );
};

export default ContactListItem;
