import { View, FlatList, ImageBackground } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import ChatRoomData from "../datas/Chats";
import ChatMessage from "../components/ChatMessage";
import InputChatBox from "../components/InputChatBox";
import { useTailwind } from "tailwind-rn/dist";
import  BG  from "../assets/images/BG.png";

type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, "ChatRoom">;
const ChatRoomScreen = () => {
  const tw = useTailwind();
  const {
    params: { id },
  } = useRoute<ChatRoomScreenRouteProp>();
  return (
    <ImageBackground source={BG} style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <ChatMessage Message={item} />}
        inverted
      />
      <View>
        <InputChatBox />
      </View>
    </ImageBackground>
  );
};

export default ChatRoomScreen;
