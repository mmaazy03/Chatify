import React from 'react';
import {View, StyleSheet, Platform, Image} from 'react-native';
import R from '../../theme/R';
import Text from '../Text';
import {DefaultUserAvatar} from '../../assets';

const ChatBox = ({item}) => {
  const messageType = item?.direction === 'InBound' ? 'from' : 'to';

  return (
    <View style={styles.formView}>
      <View
        style={[
          styles.messageRow,
          {
            justifyContent: messageType === 'to' ? 'flex-end' : 'flex-start',
          },
        ]}>
        {messageType === 'from' && (
          <Image source={DefaultUserAvatar} style={styles.userAvatar} />
        )}

        <View
          style={[
            styles.messageBox,
            {
              borderBottomRightRadius: R.unit.scale(
                messageType === 'to' ? 0 : 10,
              ),
              borderBottomLeftRadius: R.unit.scale(
                messageType === 'to' ? 10 : 0,
              ),
              backgroundColor:
                messageType === 'to' ? R.color.primaryColor3 : R.color.black2,
              marginLeft: R.unit.scale(messageType === 'to' ? 0 : 5),
              marginRight: R.unit.scale(messageType === 'to' ? 5 : 0),
              width: '50%',
            },
          ]}>
          <Text
            variant={'body3'}
            font={'PoppinsRegular'}
            color={R.color.blackShade2}
            align={messageType == 'to' ? 'left' : null}
            transform={'none'}>
            {item?.text}
          </Text>

          {item.createdAt && (
            <Text
              variant={'body5'}
              font={'PoppinsRegular'}
              color={R.color.blackShade2}
              align={messageType == 'to' ? 'right' : 'left'}
              transform={'none'}>
              {item.createdAt}
            </Text>
          )}
        </View>

        {messageType === 'to' && (
          <Image source={DefaultUserAvatar} style={styles.userAvatar} />
        )}
      </View>
    </View>
  );
};
export default ChatBox;

const styles = StyleSheet.create({
  formView: {
    marginTop: R.unit.scale(10),
    paddingHorizontal: R.unit.scale(10),
    width: '100%',
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
    position: 'absolute',
    right: 1,
    bottom: 0,
    borderRadius: R.unit.scale(20),
    borderWidth: R.unit.scale(1),
    borderColor: R.color.white,
  },
  messageRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  messageBox: {
    backgroundColor: R.color.primaryColor1,
    paddingHorizontal: R.unit.scale(16),
    borderTopRightRadius: R.unit.scale(10),
    borderTopLeftRadius: R.unit.scale(10),
    justifyContent: 'space-between',
    paddingVertical: R.unit.scale(2),
  },
  flatListContainer: {
    paddingTop: R.unit.scale(10),
    height: R.unit.height(0.8),
    flexGrow: 0,
  },
  flatListContentContainer: {
    justifyContent: 'flex-start',
    flexGrow: 1,
    paddingHorizontal: R.unit.scale(5),
  },
  footerContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: R.unit.height(Platform.OS === 'ios' ? 0.15 : 0.1),
  },
});
