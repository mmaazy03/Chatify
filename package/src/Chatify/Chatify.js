import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  FlatList,
  Image,
} from "react-native";
import R from "../theme/R";
import ChatHeader from "../components/ChatHeader";
import ChatFooter from "../components/ChatFooter";
import Text from "../components/Text";
import { DefaultUserAvatar } from "../assets";

function Chatify({
  title,
  data,
  text,
  placeholderText,
  onSend,
  onTextChange,
  containerStyles,
  contentContainerStyles,
}) {
  const flatListRef = useRef();

  const _renderList = ({ item }) => {
    const messageType = item?.direction === "InBound" ? "from" : "to";

    return (
      <View style={styles.formView}>
        <View
          style={[
            styles.messageRow,
            {
              justifyContent: messageType === "to" ? "flex-end" : "flex-start",
            },
          ]}
        >
          {messageType === "from" && (
            <Image source={DefaultUserAvatar} style={styles.userAvatar} />
          )}

          <View
            style={[
              styles.messageBox,
              {
                borderBottomRightRadius: R.unit.scale(
                  messageType === "to" ? 0 : 10
                ),
                borderBottomLeftRadius: R.unit.scale(
                  messageType === "to" ? 10 : 0
                ),
                backgroundColor:
                  messageType === "to" ? R.color.primaryColor3 : R.color.black2,
                marginLeft: R.unit.scale(messageType === "to" ? 0 : 5),
                marginRight: R.unit.scale(messageType === "to" ? 5 : 0),
                width: "50%",
              },
            ]}
          >
            <Text
              variant={"body3"}
              font={"PoppinsRegular"}
              color={R.color.blackShade2}
              align={messageType == "to" ? "left" : null}
              transform={"none"}
            >
              {item?.text}
            </Text>

            {item.createdAt && (
              <Text
                variant={"body5"}
                font={"PoppinsRegular"}
                color={R.color.blackShade2}
                align={messageType == "to" ? "right" : "left"}
                transform={"none"}
              >
                {item.createdAt}
              </Text>
            )}
          </View>

          {messageType === "to" && (
            <Image source={DefaultUserAvatar} style={styles.userAvatar} />
          )}
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : undefined}
      keyboardVerticalOffset={40}
      style={{ flex: 1 }}
    >
      <ChatHeader name={title} />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: R.color.white,
          flex: 1,
        }}
      >
        {data.length > 0 ? (
          <FlatList
            ref={flatListRef}
            data={data || []}
            style={[styles.flatListContainer, containerStyles]}
            contentContainerStyle={[
              styles.flatListContentContainer,
              contentContainerStyles,
            ]}
            renderItem={_renderList}
            showsVerticalScrollIndicator={false}
            fadingEdgeLength={12}
            onContentSizeChange={() => flatListRef.current.scrollToEnd()}
            onLayout={() => flatListRef.current.scrollToEnd()}
          />
        ) : null}
      </ScrollView>
      <ChatFooter
        text={text}
        placeholderText={placeholderText}
        onChange={(data) => {
          onTextChange(data);
        }}
        sendChat={onSend}
      />
    </KeyboardAvoidingView>
  );
}
export default Chatify;

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: R.color.white,
    marginVertical: R.unit.scale(10),
    borderRadius: R.unit.scale(5),
    shadowColor: "#e4a980",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.86,
    elevation: 16,
  },
  chatBox: {
    paddingHorizontal: R.unit.scale(12),
    paddingVertical: R.unit.scale(8),
    marginBottom: R.unit.scale(8),
    borderRadius: R.unit.scale(8),
    width: "85%",
  },
  formView: {
    marginTop: R.unit.scale(10),
    paddingHorizontal: R.unit.scale(10),
    width: "100%",
  },
  userAvatar: {
    width: R.unit.scale(50),
    height: R.unit.scale(50),
    borderRadius: R.unit.scale(40),
    borderColor: R.color.white,
    borderWidth: 1,
  },
  onlineStatus: {
    width: R.unit.scale(10),
    height: R.unit.scale(10),
    position: "absolute",
    right: 1,
    bottom: 0,
    borderRadius: R.unit.scale(20),
    borderWidth: R.unit.scale(1),
    borderColor: R.color.white,
  },
  messageRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
  },
  messageBox: {
    backgroundColor: R.color.primaryColor1,
    paddingHorizontal: R.unit.scale(16),
    borderTopRightRadius: R.unit.scale(10),
    borderTopLeftRadius: R.unit.scale(10),
    justifyContent: "space-between",
    paddingVertical: R.unit.scale(2),
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
  },
  footerContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: R.unit.height(Platform.OS === "ios" ? 0.15 : 0.1),
  },
});
