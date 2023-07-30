import React from 'react';
import { View, StyleSheet,Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import Board from './2048/src/components/Board';
import BoardSizePicker from './2048/src/components/BoardSizePicker';
import Header from './2048/src/components/Header';
import Info from './2048/src/components/Info';
import createStore from './2048/src/store';
// import styles from './2048/src/styles'

const store = createStore();

const Game2048Screen: React.FC = () => {
  return (
    <Provider store={store}>
         <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.app}>
            <View style={styles.page}>
                <Header />
                <Board />
                <BoardSizePicker />
                <Info />
            </View>
            </View>
        </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        },
  app: {
    flex: 1,
    backgroundColor: '#faf8ef',
    // Additional styles if needed
  },
  page: {
    flex: 1,
    maxWidth: 600,
    margin: 'auto',
    padding: 20,
    fontSize: 16,
    // Additional styles if needed
  },
  // Add other styles here
});

export default Game2048Screen;