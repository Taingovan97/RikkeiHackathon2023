import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Direction } from '../types/Direction';
import { Animation, AnimationMerge, AnimationMove, AnimationNew, AnimationType } from '../types/Animations';
import { gridGap } from '../config';
import styles from '../styles';

export interface BoardTileProps {
  value: number;
  animations?: Animation[];
}

function tileTranslate(axis: 'X' | 'Y', value: number) {
  return { [`translate${axis}`]: `${value * (parseInt(gridGap) + 100)}%` };
}

function findAnimation<T extends Animation>(
  animations: Animation[] | undefined,
  type: AnimationType
): T {
  return animations?.find(animation => animation.type === type) as T;
}

const BoardTile: React.FC<BoardTileProps> = ({ value, animations }) => {
  const moveAnimation = useMemo(
    () => findAnimation<AnimationMove>(animations, AnimationType.MOVE),
    [animations]
  );
  const newAnimation = useMemo(
    () => findAnimation<AnimationNew>(animations, AnimationType.NEW),
    [animations]
  );
  const mergeAnimation = useMemo(
    () => findAnimation<AnimationMerge>(animations, AnimationType.MERGE),
    [animations]
  );

  const style = useMemo(() => {
    if (!moveAnimation) {
      return {};
    }

    switch (moveAnimation.direction) {
      case Direction.UP:
        return tileTranslate('Y', -1 * moveAnimation.value);
      case Direction.DOWN:
        return tileTranslate('Y', moveAnimation.value);
      case Direction.LEFT:
        return tileTranslate('X', -1 * moveAnimation.value);
      case Direction.RIGHT:
          return tileTranslate('X', moveAnimation.value);
      default:
        return {};
    }
  }, [moveAnimation]);

  let tileStyle;

  switch (value) {
    case 2:
      tileStyle = styles[`boardTile_2`];
      break;
    case 4:
      tileStyle = styles[`boardTile_4`];
      break;
    case 8:
      tileStyle = styles[`boardTile_8`];
      break;
    case 16:
      tileStyle = styles[`boardTile_16`];
      break;
    case 32:
      tileStyle = styles[`boardTile_32`];
      break;
    case 64:
      tileStyle = styles[`boardTile_64`];
      break;
    case 128:
      tileStyle = styles[`boardTile_128`];
      break;
    case 256:
      tileStyle = styles[`boardTile_256`];
      break;
    case 512:
      tileStyle = styles[`boardTile_512`];
      break;
    case 1024:
      tileStyle = styles[`boardTile_1024`];
      break;
    case 2048:
      tileStyle = styles[`boardTile_2048`];
    break;
  
    default:
      tileStyle = styles[`boardTile_8`];
      break;
  }
  // Replace 'transformStyle' with the actual transform value
  const transformStyle = {}; // Replace this with your actual transform style

  // Merge styles using StyleSheet.flatten()
  const mergedStyles = StyleSheet.flatten([
    styles.boardTileValue,
    tileStyle,
    newAnimation ? styles.boardTileNew : {},
    mergeAnimation ? styles.boardTileMerge : {},
    { transform: [transformStyle] },
  ]);

  return (
    <View style={styles.boardTile}>
      {value !== 0 && (
        <View style={mergedStyles}>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      )}
    </View>
  );
};

export default BoardTile;
