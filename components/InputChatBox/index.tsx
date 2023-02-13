import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTailwind } from "tailwind-rn/dist";
import Colors from "../../constants/Colors";

const InputChatBox = () => {
  const [message, setMessage] = useState("");
  const OnPressSend = () => {
    console.warn("Send : " + message);
    setMessage("");
  };
  const OnPressMicro = () => {
    console.warn("OnPressMicro");
  };
  const tw = useTailwind();
  return (
    <View style={[tw("flex-row justify-between"), { marginTop: 6 }]}>
      {/* <View style={[tw(" flex-row "), { alignItems: "center" }]}> */}
      <View style={[tw("flex-row flex-1")]}>
        <View
          style={[
            tw("flex-row flex-1 bg-white rounded-xl"),
            {
              padding: 10,
              marginRight: 4,
              alignItems: "flex-end",
            },
          ]}
        >
          <FontAwesome5 name="laugh-beam" size={22} color="grey" />
          <View style={[tw("flex-1"), { marginHorizontal: 4 }]}>
            <TextInput value={message} onChangeText={setMessage} multiline />
          </View>
          <View style={tw("flex-row items-center")}>
            <Entypo name="attachment" size={22} />
            {!message && (
              <Fontisto style={tw("ml-4")} name="camera" size={22} />
            )}
          </View>
        </View>
      </View>
      {/* </View> */}
      <View
        style={[
          tw("rounded-full flex-row items-center"),
          {
            backgroundColor: Colors.light.tint,
            padding: 8,
            marginHorizontal: 4,
            alignSelf: "flex-end",
            marginBottom: 4,
          },
        ]}
      >
        {!message ? (
          <MaterialCommunityIcons
            onPress={OnPressMicro}
            name="microphone"
            size={20}
            color="white"
          />
        ) : (
          <MaterialIcons
            onPress={OnPressSend}
            name="send"
            size={20}
            color="white"
          />
        )}
      </View>
    </View>
  );
};

export default InputChatBox;
