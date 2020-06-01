import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import Proptypes from 'prop-types';
import colors from '../styles/colors';

export const HomeScreenButton = ({
  text,
  textColor,
  background,
  icon,
  handleOnPress,
}) => {
  const backgroundColor = background || 'transparent';
  const color = textColor || colors.black;
  return (
    <TouchableHighlight
      style={[{ backgroundColor }, styles.wrapper]}
      onPress={handleOnPress}>
      <View style={styles.buttonTextWrapper}>
        {icon}
        <Text style={[{ color }, styles.buttonText]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

HomeScreenButton.proptypes = {
  text: Proptypes.string.isRequired,
  textColor: Proptypes.string,
  background: Proptypes.string,
  icon: Proptypes.object,
  handleOnPress: Proptypes.func.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 15,
    marginBottom: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    alignItems: 'center',
  },
  buttonTextWrapper: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
});
