import { ScrollView, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import ChatRooms from "../datas/ChatRooms";
export default function TabTwoScreen() {
  return (
    <ScrollView>
      {ChatRooms.map((item, index) => (
        <ChatListItem key={index} chatRoom={item} />
      ))}
    </ScrollView>
  );
}
