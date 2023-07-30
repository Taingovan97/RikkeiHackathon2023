import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetAction, undoAction } from '../actions';
import { StateType } from '../reducers';
import styles from '../styles';

const  Header: React.FC = () => {
  const dispatch = useDispatch();
  const reset = useCallback(() => dispatch(resetAction()), [dispatch]);
  const undo = useCallback(() => dispatch(undoAction()), [dispatch]);

  const score = useSelector((state: StateType) => state.score);
  const scoreIncrease = useSelector((state: StateType) => state.scoreIncrease);
  const moveId = useSelector((state: StateType) => state.moveId);
  const best = useSelector((state: StateType) => state.best);
  const previousBoard = useSelector((state: StateType) => state.previousBoard);

  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <Text style={styles.h1}>2048</Text>
        <View style={styles.headerScores}>
          <View style={styles.headerScoresScore}>
            <Text>Score</Text>
            <Text>{score}</Text>
            {!!scoreIncrease && (
              <Text style={styles.headerScoresScoreIncrease} key={moveId}>
                +{scoreIncrease}
              </Text>
            )}
          </View>
          <View style={styles.headerScoresScore}>
            <Text>Best</Text>
            <Text>{best}</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerRow}>
      <View style={styles.headerTextContainer}>
        <Text numberOfLines={undefined} style={styles.headerText}>
          Join the numbers and get to the{' '}
          <Text style={styles.strong}>2048 tile!</Text>
        </Text>
      </View>
      <View style={styles.headerButtons}>
        <TouchableOpacity
          style={[
            styles.button,
            { opacity: previousBoard ? 1 : 0.5 },
            !previousBoard && styles.disabledButton,
          ]}
          onPress={undo}
          disabled={!previousBoard}
        >
          <Text>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text>New game</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default Header;
