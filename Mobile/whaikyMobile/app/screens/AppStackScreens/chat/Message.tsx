import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useUser } from "../../../context/UserContext";
import { useChat } from "../../../context/ChatContext";

const Message: React.FC<{ message: any }> = ({ message }) => {
  const { currentUser } = useUser();
  const { data } = useChat();

  const isOwner = message.senderId === currentUser!.uid;

  const userImageUri = isOwner 
    ? currentUser!.photoURL || require('../../../../assets/user.png')
    : data.user.photoURL || require('../../../../assets/user.png');

  const renderImage = () => {
    if (message.img) {
      return (
        <Image
          source={{ uri: message.img }}
          style={{ width: 50, height: 50 }}
          onError={() => {

          }}
        />
      );
    }
    return null;
  };

  return (
    <View style={{ flexDirection: "row", margin: 5, alignItems: "center" }}>
      <Image
        source={{ uri: userImageUri }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <Text style={{ marginLeft: 10 }}>{message.text}</Text>
      {renderImage()}
    </View>
  );
};

export default Message;
