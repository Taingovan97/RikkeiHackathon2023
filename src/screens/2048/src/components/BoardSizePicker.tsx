import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { resetAction } from '../actions';
import styles from '../styles';

import { supportedBoardSizes } from '../config';

const BoardSizePicker: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.header}>Board size</Text>
      <View style={styles.sizePicker}>
        {supportedBoardSizes.map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => dispatch(resetAction(size))}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{`${size}x${size}`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BoardSizePicker;
