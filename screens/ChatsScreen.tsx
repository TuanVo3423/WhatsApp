import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import ChatListItem from "../components/ChatListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import NewMessageButton from "../components/NewMessageButton";
import { View } from "../components/Themed";
import ChatRooms from "../datas/ChatRooms";
import { RootStackParamList, RootTabParamList } from "../types";
export type ChatScreenNavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<RootTabParamList, "Chats">,
  NativeStackNavigationProp<RootStackParamList>
>;
export default function ChatScreen() {
  const tw = useTailwind();
  return (
    <View>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
        <NewMessageButton />
    </View>
  );
}
