import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Message } from "../../types";
import moment from "moment";
import { useTailwind } from "tailwind-rn/dist";
import Colors from "../../constants/Colors";
type ChatMessageProps = {
  Message: Message;
};

const ChatMessage = ({ Message }: ChatMessageProps) => {
  const tw = useTailwind();
  return (
    <View>
      <View style={[{ padding: 5 }]}>
        <View
          style={[
            {
              backgroundColor: Message.user.id === "u1" ? "#DCF8C5" : "#fff",
              padding: 10,
              marginLeft: Message.user.id === "u1" ? 50 : 0,
              marginRight: Message.user.id === "u1" ? 0 : 50,
            },
            tw("rounded"),
          ]}
        >
          {Message.user.id !== "u1" && (
            <Text
              style={[
                { color: Colors.light.tint, marginBottom: 5 },
                tw("font-bold"),
              ]}
            >
              {Message.user.name}
            </Text>
          )}
          <Text>{Message.content}</Text>
          <Text style={[{ alignSelf: "flex-end" }]}>
            {moment(Message.createdAt).fromNow()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatMessage;
