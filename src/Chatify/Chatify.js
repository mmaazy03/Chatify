import React, { useState } from "react";
import { View } from "react-native";
import Chatify from "./Chatify";
import { DefaultUserAvatar } from "../assets";

function ChatScreenTest() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    {
      _id: 1,
      user: { id: "123", name: "Maaz", photo: DefaultUserAvatar },
      text: "Metro boomin",
      direction: "InBound",
    },
    {
      _id: 2,
      user: { id: "123", name: "Opp", photo: DefaultUserAvatar },
      text: "21 savage",
      direction: "InBound",
    },
  ]);

  const onChange = (data) => {
    setText(data);
  };

  const sendChat = () => {
    const message = {
      text: text,
      user: {
        id: "456",
        name: "poppin",
        photo: DefaultUserAvatar,
      },
      direction: "OutBound",
    };
    setMessages((prevState) => [...prevState, message]);
  };

  const chatThemeConfig = {
    avoidingView: {},
    header: {
      columnGap: 10,
      headerImage: {},
      headerIcon: {},
      headerIconLayout: {},
      headerTitle: {},
    },
    row: {
      marginTop: 20,
    },
    footer: {
      inputField: {},
      footerIconLayout: {},
      footerIcon: {},
    },
  };

  const _renderHeader = () => {
    return <View style={{ backgroundColor: "red", padding: 20 }}></View>;
  };

  return (
    <Chatify
      data={messages}
      text={text}
      title="Maazy"
      onSend={sendChat}
      onTextChange={onChange}
      theme={chatThemeConfig}
    />
  );
}
export default ChatScreenTest;
