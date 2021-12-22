import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const Card = ({children, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 20,
    margin: 5,
  },
});

export default Card;
