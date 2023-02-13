import { View, Text, FlatList } from "react-native";
import React from "react";
import ContactListItem from "../components/ContactListItem";
import UserData from "../datas/Users";

const ContactScreen = () => {
  return (
    <View style={{padding : 10}}>
      <FlatList
        data={UserData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactListItem User={item} />}
      />
    </View>
  );
};

export default ContactScreen;
