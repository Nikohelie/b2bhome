import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import colors from '../styles/colors';
import { HomeScreenButton } from '../components/HomeScreenButton';

export default class LoggingScreen extends React.Component {
  onFacebookPress() {
    alert('you Click on the btn');
  }

  onCreateAccountPress() {
    alert('Create an account for B2BHome');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Icon name="hotel" size={35} style={styles.logoApp} />
          <Text style={styles.welcomeText}> Welcome To B2BHome</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <HomeScreenButton
            text="Continue with Facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookBtn} />}
            handleOnPress={this.onFacebookPress}
          />
          <HomeScreenButton
            text="Create Account"
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  welcomeWrapper: {
    display: 'flex',
    marginTop: 40,
    padding: 20,
  },
  buttonWrapper: {
    display: 'flex',
    marginTop: 50,
    padding: 20,
  },
  logoApp: {
    marginTop: 70,
    color: colors.white,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginTop: 30,
  },
  facebookBtn: {
    color: colors.green01,
  },
});
