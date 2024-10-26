import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Image,
  ImageStyle,
  Text,
} from "react-native";
import { DefaultUserAvatar } from "../../assets";
import Icon from "../Icon";
import R from "../../theme/R";

function ChatHeader({
  name,
  image,
  style,
  imageStyle,
  titleStyle,
  onIconPress,
}) {
  return (
    <View style={[styles.mainLayout, style]}>
      <TouchableOpacity
        onPress={onIconPress}
        activeOpacity={0.9}
        style={styles.backIcon}
      >
        <Icon
          type={"MaterialCommunityIcons"}
          name={"arrow-left"}
          color={R.color.primaryColor1}
          size={20}
        />
      </TouchableOpacity>
      {image && (
        <Image
          source={image ? image : DefaultUserAvatar}
          style={[styles.avatar, imageStyle]}
          resizeMode={"cover"}
        />
      )}

      <Text style={[styles.text, titleStyle]}>{name}</Text>
    </View>
  );
}
export default ChatHeader;

const styles = StyleSheet.create({
  mainLayout: {
    paddingHorizontal: R.unit.scale(12),
    paddingVertical: R.unit.scale(12),
    backgroundColor: R.color.primaryColor1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: R.unit.scale(5),
  },
  avatar: {
    width: R.unit.scale(35),
    height: R.unit.scale(35),
    borderRadius: R.unit.scale(10),
    marginLeft: R.unit.scale(20),
    justifyContent: "center",
  },
  backIcon: {
    backgroundColor: R.color.white,
    height: R.unit.scale(30),
    width: R.unit.scale(30),
    borderRadius: R.unit.scale(30),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});
