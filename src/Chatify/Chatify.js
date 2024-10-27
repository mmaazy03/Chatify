import React, { useRef } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  FlatList,
} from "react-native";
import R from "./theme/R";
import ChatHeader from "./components/ChatHeader";
import ChatFooter from "./components/ChatFooter";
import ChatBox from "./components/ChatBox";

const Chatify = ({
  title,
  data,
  text,
  placeholderText,
  keyboardVerticalOffset = 120,
  onSend,
  onTextChange,
  containerStyles,
  contentContainerStyles,
  theme,
  _renderHeader,
  _renderFooter,
}) => {
  const flatListRef = useRef();

  const _renderChatRow = ({ item }) => {
    return <ChatBox item={item} theme={theme} />;
  };

  const _renderChatHeader = () => {
    if (_renderHeader) {
      return _renderHeader();
    } else {
      return <ChatHeader name={title} theme={theme} />;
    }
  };

  const _renderChatFooter = () => {
    if (_renderFooter) {
      return _renderFooter();
    } else {
      return (
        <ChatFooter
          theme={theme}
          text={text}
          placeholderText={placeholderText}
          onChange={(data) => {
            onTextChange(data);
          }}
          sendChat={onSend}
        />
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={[styles.avoidingView, theme?.avoidingView]}
    >
      <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
        {_renderChatHeader()}
        {data.length > 0 ? (
          <FlatList
            ref={flatListRef}
            data={data || []}
            style={[styles.flatListContainer, containerStyles]}
            contentContainerStyle={[
              styles.flatListContentContainer,
              contentContainerStyles,
            ]}
            renderItem={_renderChatRow}
            showsVerticalScrollIndicator={false}
            fadingEdgeLength={12}
            onContentSizeChange={() => flatListRef.current.scrollToEnd()}
            onLayout={() => flatListRef.current.scrollToEnd()}
          />
        ) : null}
      </ScrollView>
      {_renderChatFooter()}
    </KeyboardAvoidingView>
  );
};
export default Chatify;

const styles = StyleSheet.create({
  scrollViewWrapper: {
    backgroundColor: R.color.white,
    flex: 1,
  },
  avoidingView: {
    flex: 1,
  },
  flatListContainer: {
    paddingTop: R.unit.scale(10),
    height: R.unit.height(0.8),
    flexGrow: 0,
  },
  flatListContentContainer: {
    justifyContent: "flex-start",
    flexGrow: 1,
    paddingHorizontal: R.unit.scale(5),
    paddingBottom: R.unit.scale(40),
  },
});
