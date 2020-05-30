import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import colors from '../styles/colors';

export const LoggingScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.welcomeWrapper}>
        <Image source={require('../img/airbnb-logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}> Welcome To B2BHome</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 50,
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 70,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginTop: 40,
  },
});
