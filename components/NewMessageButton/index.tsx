import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useTailwind } from "tailwind-rn/dist";
import { ChatScreenNavigationProp } from "../../screens/ChatsScreen";
import { useNavigation } from "@react-navigation/native";

const NewMessageButton = () => {
  const navigation = useNavigation<ChatScreenNavigationProp>();
  const tw = useTailwind();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
      <View
        style={[
          {
            backgroundColor: Colors.light.tint,
            position: "absolute",
            bottom: 20,
            right: 10,
            width: 60,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          },
          ,
          tw("rounded-xl"),
        ]}
      >
        <MaterialCommunityIcons
          name="message-reply-text"
          size={28}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewMessageButton;
