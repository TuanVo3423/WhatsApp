import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import ChatRoomData from "../datas/Chats";
import ChatMessage from "../components/ChatMessage";

type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, "ChatRoom">;
const ChatRoomScreen = () => {
  const {
    params: { id },
  } = useRoute<ChatRoomScreenRouteProp>();
  return (
    <FlatList
      data={ChatRoomData.messages}
      renderItem={({ item }) => <ChatMessage Message={item} />}
      inverted
    />
  );
};

export default ChatRoomScreen;
