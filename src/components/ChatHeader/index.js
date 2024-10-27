import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {DefaultUserAvatar} from '../../assets';
import Icon from '../Icon';
import R from '../../theme/R';
import Text from '../Text';

const ChatHeader = ({name, image, onIconPress, theme}) => {
  return (
    <View style={[styles.mainLayout, theme?.header]}>
      <TouchableOpacity
        onPress={onIconPress}
        activeOpacity={0.9}
        style={[styles.backIcon, theme?.header?.headerIconLayout]}>
        <Icon
          type={'MaterialCommunityIcons'}
          name={'arrow-left'}
          color={R.color.primaryColor1}
          customStyles={theme?.header?.headerIcon}
          size={20}
        />
      </TouchableOpacity>
      {image && (
        <Image
          source={image ? image : DefaultUserAvatar}
          style={[styles.avatar, theme?.header?.headerImage]}
          resizeMode={'cover'}
        />
      )}

      <Text
        variant={'body2'}
        font={'PoppinsRegular'}
        color={R.color.black}
        style={theme?.header?.headerTitle}
        transform={'none'}>
        {name}
      </Text>
    </View>
  );
};
export default ChatHeader;

const styles = StyleSheet.create({
  mainLayout: {
    paddingHorizontal: R.unit.scale(12),
    paddingVertical: R.unit.scale(12),
    backgroundColor: R.color.primaryColor1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: R.unit.scale(5),
  },
  avatar: {
    width: R.unit.scale(35),
    height: R.unit.scale(35),
    borderRadius: R.unit.scale(10),
    marginLeft: R.unit.scale(20),
    justifyContent: 'center',
  },
  backIcon: {
    backgroundColor: R.color.white,
    height: R.unit.scale(30),
    width: R.unit.scale(30),
    borderRadius: R.unit.scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: R.unit.scale(16),
  },
});
