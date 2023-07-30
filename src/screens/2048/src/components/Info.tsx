import React from 'react';
import { View, Text, Linking } from 'react-native';
import styles from '../styles';

const Info = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <View style={styles.info}>
      <Text style={styles.h2}>About</Text>
      <Text style={styles.paragraph}>
        This is a reimplementation of Gabriele Cirulli's excellent{' '}
        <Text style={styles.link} onPress={() => handleLinkPress('https://play2048.co/')}>
          2048
        </Text>{' '}
        game, built with React, Redux, and TypeScript. Unlike other React-based implementations,
        only functional components are used here. This project doesn't rely on canvas or element
        refs.
      </Text>
    </View>
  );
};

export default Info;
