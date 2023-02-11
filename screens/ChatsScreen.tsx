import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import ChatRooms from "../datas/ChatRooms";
import { RootStackParamList, RootTabParamList } from "../types";
export type ChatScreenNavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<RootTabParamList, "Chats">,
  NativeStackNavigationProp<RootStackParamList>
>;
export default function ChatScreen() {
  return (
    <ScrollView>
      {ChatRooms.map((item, index) => (
        <ChatListItem key={index} chatRoom={item} />
      ))}
    </ScrollView>
  );
}
