import { StyleSheet } from 'react-native';
import {
  animationDuration,
  gridGap,
  defaultBoardSize,
  supportedBoardSizes,
  victoryTileValue,
} from './config';


const styles = StyleSheet.create({
  '*': {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },
  html: {
    fontSize: 16,
  },
  sizePicker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  body: {
    margin: 0,
    // background: '#faf8ef',
    color: '#776e65',
  },
  header: {
    paddingVertical: 32,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 1,
    marginRight: 8,
  },
  headerText: {
    fontSize: 16,
  },
  h1: {
    fontSize: 64,
    margin: 0,
    marginBottom: 10,
  },
  headerScores: {
    flexDirection: 'row',
  },
  // overlay: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   animationName: 'reveal',
  //   animationDuration: '0.4s',
  //   animationTimingFunction: 'ease-in-out',
  // },
  overlayDefeat: {
    backgroundColor: 'rgba(238, 228, 218, 0.73)',
  },
  overlayVictory: {
    backgroundColor: 'rgba(237, 194, 46, 0.5)',
  },
  overlayButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  // button: {
  //   backgroundColor: '#8f7a66',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 6,
  //   marginHorizontal: 5,
  // },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  valueText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerScoresScore: {
    position: 'relative',
    backgroundColor: '#bbada0',
    paddingVertical: 1,
    paddingHorizontal: 25,
    borderRadius: 6,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
  },
  headerScoresScoreIncrease: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 26,
    opacity: 0,
    animationDuration: 'var(--animation-duration)',
  },
  strong: {
    fontWeight: 'bold',
  },
  headerButtons: {
    flexDirection: 'row',
    minWidth: 'max-content',
  },
  disabledButton: {
    opacity: 0.5,
  },
  button: {
    backgroundColor: '#8f7a66',
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 0,
    cursor: 'pointer',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    borderRadius: 6,
    transitionProperty: 'opacity',
    transitionDuration: `${animationDuration}ms`,
    transitionTimingFunction: 'ease-in-out',
  },
  page: {
    maxWidth: 600,
    margin: 0,
    paddingVertical: 20,
    fontSize: 18,
  },
  app: {
    animationDuration: animationDuration,
    gridGap: gridGap,

  },
  info: {
    fontSize: 18,
    color: '#776e65',
    fontWeight: '500',
    lineHeight: 28, // The equivalent line-height to 1.65
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 15,
  },
  link: {
    color: '#776e65',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  'info a': {
    color: '#776e65',
    fontWeight: 'bold',
  },
  'size-picker': {
    flexDirection: 'row',
    marginVertical: 0,
    marginHorizontal: -5,
  },
  'size-picker button': {
    flex: 1,
    marginHorizontal: 5,
  },
  board: {
    position: 'relative',
    backgroundColor: '#bbada0',
    borderRadius: 6,
    display: 'grid',
    gridTemplateColumns: `repeat(var(--board-size, ${defaultBoardSize}), 1fr)`,
    gridGap: gridGap,
    padding: gridGap,
    userSelect: 'none',
    touchAction: 'none',
  },
  boardTile: {
    position: 'relative',
    borderRadius: 3,
    paddingBottom: '100%',
    backgroundColor: '#cdc1b4',
    lineHeight: 0,
    fontSize: 26,
  },
  boardTileValue: {
    backgroundColor: '#3c3a32',
    color: '#f9f6f2',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 0,
    borderRadius: 3,
    zIndex: 9,
    transitionProperty: 'transform',
    transitionDuration: `${animationDuration}ms`,
    transitionTimingFunction: 'ease-in-out',
  },
  boardTileNew: {
    animationDuration: `${animationDuration}ms`,
    animationName: 'tile-new',
    animationTimingFunction: 'ease-in-out',
  },
  boardTileMerge: {
    animationDuration: `${animationDuration}ms`,
    animationName: 'tile-merge',
    animationTimingFunction: 'ease-in-out',
  },
  boardTile_2: {
    backgroundColor: '#eee4da',
    color: '#776e65',
    fontSize: 34,
  },
  boardTile_4: {
    backgroundColor: '#ede0c8',
    color: '#776e65',
    fontSize: 34,
  },
  boardTile_8: {
    backgroundColor: '#f2b179',
    fontSize: 34,
  },
  boardTile_16: {
    backgroundColor: '#f59563',
    fontSize: 34,
  },
  boardTile_32: {
    backgroundColor: '#f67c5f',
    fontSize: 34,
  },
  boardTile_64: {
    backgroundColor: '#f65e3b',
    fontSize: 34,
  },
  boardTile_128: {
    backgroundColor: '#edcf72',
    fontSize: 26,
  },
  boardTile_256: {
    backgroundColor: '#edcc61',
    fontSize: 26,
  },
  boardTile_512: {
    backgroundColor: '#edc850',
    fontSize: 26,
  },
  boardTile_1024: {
    backgroundColor: '#edc53f',
  },
  boardTile_2048: {
    backgroundColor: '#edc22e',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(238, 228, 218, 0.73)',
    animationName: 'reveal',
    animationDuration: '0.4s',
    animationTimingFunction: 'ease-in-out',
  },
  'overlay-defeat': {
    backgroundColor: 'rgba(238, 228, 218, 0.73)',
  },
  'overlay-victory': {
    backgroundColor: 'rgba(237, 194, 46, 0.5)',
    color: '#f9f6f2',
  },
  'overlay-buttons button': {
    marginHorizontal: 5,
  },
  '@keyframes reveal': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  '@keyframes tile-new': {
    '0%': {
      transform: [{ scale: 0.5 }],
    },
    '100%': {
      transform: [{ scale: 1 }],
    },
  },
  '@keyframes tile-merge': {
    '0%': {
      transform: [{ scale: 0.7 }],
    },
    '80%': {
      transform: [{ scale: 1.1 }],
    },
    '100%': {
      transform: [{ scale: 1 }],
    },
  },
  '@keyframes score-increase': {
    '0%': {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
    '100%': {
      opacity: 0,
      transform: [{ translateY: -40 }],
    },
  },
});

export default styles;
