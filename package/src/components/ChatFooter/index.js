import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import R from "../../theme/R";
import Icon from "../Icon";

const ChatFooter = ({ onChange, sendChat, inputStyle }) => {
  const inputRef = useRef();
  const [text, setText] = useState("");

  const onChangeText = (value) => {
    setText(value);
    onChange && onChange(value);
  };

  const sendPress = () => {
    if (inputRef) {
      inputRef?.current?.clear();
    }
    sendChat && sendChat();
    setText("");
  };

  return (
    <View style={[styles.inputFieldLayout, styles.inputTooBar]}>
      <TextInput
        value={text}
        onChange={onChangeText}
        style={[styles.inputField, inputStyle]}
      />

      <TouchableOpacity
        onPress={sendPress}
        activeOpacity={0.8}
        disabled={text.length === 0 ? true : false}
      >
        <Icon
          type={"MaterialCommunityIcons"}
          name={"send"}
          size={30}
          color={R.color.black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  inputFieldLayout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputTooBar: {
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(12),
    paddingTop: R.unit.scale(5),
    marginBottom: R.unit.scale(20),
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: R.unit.scale(6),
  },
  inputField: {
    height: 50,
    backgroundColor: R.color.gray4,
    flex: 0.95,
  },
});
