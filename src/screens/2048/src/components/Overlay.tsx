import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dismissAction, resetAction } from '../actions';
import { StateType } from '../reducers';
import styles from '../styles';

const Overlay = () => {
  const dispatch = useDispatch();
  const reset = useCallback(() => dispatch(resetAction()), [dispatch]);
  const dismiss = useCallback(() => dispatch(dismissAction()), [dispatch]);

  const defeat = useSelector((state: StateType) => state.defeat);
  const victory = useSelector((state: StateType) => state.victory && !state.victoryDismissed);

  if (victory) {
    return (
      <View style={[styles.overlay, styles.overlayVictory]}>
        <Text style={styles.header}>You win!</Text>
        <View style={styles.overlayButtons}>
          <TouchableOpacity style={styles.button} onPress={dismiss}>
            <Text style={styles.buttonText}>Keep going</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={reset}>
            <Text style={styles.buttonText}>Try again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (defeat) {
    return (
      <View style={[styles.overlay, styles.overlayDefeat]}>
        <Text style={styles.header}>Game over!</Text>
        <View style={styles.overlayButtons}>
          <TouchableOpacity style={styles.button} onPress={reset}>
            <Text style={styles.buttonText}>Try again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return null;
};

export default Overlay;
