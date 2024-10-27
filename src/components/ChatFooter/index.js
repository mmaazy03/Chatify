import React, {useState, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import R from '../../theme/R';
import Icon from '../Icon';

const ChatFooter = ({onChange, sendChat, inputStyle, theme}) => {
  const inputRef = useRef();
  const [text, setText] = useState('');

  const onChangeText = value => {
    setText(value);
    onChange && onChange(value);
  };

  const sendPress = () => {
    if (inputRef) {
      inputRef?.current?.clear();
    }
    sendChat && sendChat();
    setText('');
  };

  return (
    <View style={[styles.inputFieldLayout, theme?.footer]}>
      <TextInput
        value={text}
        onChangeText={onChangeText}
        style={[styles.inputField, inputStyle]}
      />

      <TouchableOpacity
        onPress={sendPress}
        activeOpacity={0.8}
        style={theme?.footer?.footerIconLayout}
        disabled={text.length === 0 ? true : false}>
        <Icon
          type={'MaterialCommunityIcons'}
          name={'send'}
          size={30}
          color={R.color.black}
          customStyles={theme?.footer?.footerIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  inputFieldLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'green',
    paddingHorizontal: R.unit.scale(12),
    paddingTop: R.unit.scale(5),
    marginBottom: R.unit.scale(10),
  },
  inputField: {
    height: 50,
    backgroundColor: R.color.gray4,
    flex: 0.95,
  },
});
