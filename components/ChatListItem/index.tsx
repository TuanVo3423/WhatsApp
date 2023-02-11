import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  ChatRoom,
  RootStackParamList,
  RootTabParamList,
  User,
} from "../../types";
import moment from "moment";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { ChatScreenNavigationProp } from "../../screens/ChatsScreen";
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type Props = {
  chatRoom: ChatRoom;
};

export default function ChatListItem({ chatRoom }: Props) {
  const navigation = useNavigation<ChatScreenNavigationProp>();
  const tw = useTailwind();
  const user: User = chatRoom.users[0];
  const handlePressOnChatListItem = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id, name : chatRoom.users[1].name });
  };
  return (
    <TouchableWithoutFeedback onPress={handlePressOnChatListItem}>
      {/*  */}
      <View style={tw("flex-row items-center pl-4 pr-4 py-4 border-b-2")}>
        <View style={tw("mr-2")}>
          <Image
            source={{ uri: chatRoom.users[1].imageUrl }}
            style={tw("w-12 h-12 rounded-full")}
          />
        </View>
        {/*  */}
        <View style={tw("flex-1")}>
          <View style={tw("flex-row justify-between")}>
            <Text>{chatRoom.users[1].name}</Text>
            <Text style={tw("text-gray-600")}>
              {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
          </View>
          <View>
            <Text style={tw("text-gray-500")} numberOfLines={1}>
              {chatRoom.users[1].name}: {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
