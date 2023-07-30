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
  body: {
    margin: 0,
    // background: '#faf8ef',
    color: '#776e65',
  },
  h1: {
    fontSize: 64,
    margin: 0,
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
  'button:disabled': {
    opacity: 0.5,
    // cursor: 'not-allowed',
  },
  'button:not(:disabled):hover': {
    opacity: 0.8,
  },
  valueText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
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
  header: {
    paddingVertical: 32,
    fontSize: 18,
  },
  'headerRow': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  'headerButtons': {
    minWidth: 'max-content',
  },
  'headerScores': {
    flexDirection: 'row',
  },
  'headerScoresScore': {
    position: 'relative',
    backgroundColor: '#bbada0',
    paddingVertical: 1,
    paddingHorizontal: 25,
    borderRadius: 6,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
  },
  'header-scores-score > div:first-child': {
    color: '#eee4da',
    textTransform: 'uppercase',
    fontSize: 12,
    marginTop: 5,
  },
  'header-scores-score > div:nth-child(2)': {
    color: 'white',
    marginTop: -5,
    fontSize: 26,
  },
  'headerScoresScoreIncrease': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 26,
    opacity: 0,
    animationDuration: 'var(--animation-duration)',
  },
  info: {
    lineHeight: 1.65,
    color: '#776e65',
    fontWeight: '500',
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
    display: 'flex',
    gridTemplateColumns: `repeat(var(--board-size, ${defaultBoardSize}), 1fr)`,
    gridGap: gridGap,
    padding: gridGap,
    userSelect: 'none',
    touchAction: 'none',
  },
  strong: {
    fontWeight: 'bold',
    // Add any other styles you want to apply to the "strong" text
  },
  'board-tile': {
    position: 'relative',
    borderRadius: 3,
    paddingBottom: '100%',
    backgroundColor: '#cdc1b4',
    lineHeight: 0,
    fontSize: 26,
  },
  'board-tile-value': {
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
  },
  'board-tile-new': {
    animationDuration: `${animationDuration}ms`,
    animationName: 'tile-new',
    animationTimingFunction: 'ease-in-out',
  },
  'board-tile-merge': {
    animationDuration: `${animationDuration}ms`,
    animationName: 'tile-merge',
    animationTimingFunction: 'ease-in-out',
  },
  'board-tile-2': {
    backgroundColor: '#eee4da',
    color: '#776e65',
    fontSize: 34,
  },
  'board-tile-4': {
    backgroundColor: '#ede0c8',
    color: '#776e65',
    fontSize: 34,
  },
  'board-tile-8': {
    backgroundColor: '#f2b179',
    fontSize: 34,
  },
  'board-tile-16': {
    backgroundColor: '#f59563',
    fontSize: 34,
  },
  'board-tile-32': {
    backgroundColor: '#f67c5f',
    fontSize: 34,
  },
  'board-tile-64': {
    backgroundColor: '#f65e3b',
    fontSize: 34,
  },
  'board-tile-128': {
    backgroundColor: '#edcf72',
    fontSize: 26,
  },
  'board-tile-256': {
    backgroundColor: '#edcc61',
    fontSize: 26,
  },
  'board-tile-512': {
    backgroundColor: '#edc850',
    fontSize: 26,
  },
  'board-tile-1024': {
    backgroundColor: '#edc53f',
  },
  'board-tile-2048': {
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
  h1: {
    marginBottom: 10,
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
