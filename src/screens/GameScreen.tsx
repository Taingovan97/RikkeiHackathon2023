import { View, Text, StyleSheet, Keyboard, TouchableOpacity, Dimensions, Button } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

import { Screen } from "../components/Screen";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { InputNumber } from "antd";

export function GameScreen() {
    type StringPairArray = [number, number]
    const [gameOver, setGameOver] = useState(false)
    const [foodX, setFoodX] = useState(20);
    const [foodY, setFoodY] = useState(20); 
    const [snakeX, setSnakeX] = useState(5)
    const [snakeY, setSnakeY] = useState(5)
    const [velocityX, setVeloX] = useState(0)
    const [velocityY, setVeloY] = useState(0)
    let setIntervalId:any
    let score=0
    
    let highScore =  Number(localStorage.getItem("high-score")) || 0


    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
    const [snakeBody, setSnakeBody] = useState([[5,5]])

    // setSnakeBody((prevSnakeBody) => [
    //     ...prevSnakeBody,
    //     [6, 5], 
    //     [7, 5], 
    // ]);
    useEffect(() => {
        const updateScreenDimensions = () => {
        const { width, height } = Dimensions.get('window');
        setScreenWidth(width);
        setScreenHeight(height);
        };

        // Add a listener for orientation changes or device resizing
        Dimensions.addEventListener('change', updateScreenDimensions);

    }, []);

    const updateFoodPosition = () =>{
        setFoodX(Math.floor(Math.random() * screenWidth) + 1)
        setFoodY(Math.floor(Math.random() * screenHeight) + 1)
    }

    const FoodPoint = (foodX: number, foodY: number) => {
        return <View style={{
            width: 10,
            height: 10,
            backgroundColor: 'red',
            position: 'absolute',
            left: foodX,
            top: foodY
        }} />;
    };
    
    const handleGameOver = () =>{
        clearInterval(setIntervalId)
        alert("Game Over! Press OK to replay...")
        location.reload()
    }

    const changeDirection = (e:any) => {
        if (e === 'ArrowUp' && velocityY !== 1) {
            setVeloX(0);
            setVeloY(-1);
        } else if (e === 'ArrowDown' && velocityY !== -1) {
            setVeloX(0);
            setVeloY(1);

        } else if (e === 'ArrowLeft' && velocityX !== 1) {
            setVeloX(-1);
            setVeloY(0);
            console.log('arrow left pressed')
        } else if (e === 'ArrowRight' && velocityX !== -1) {
            setVeloX(1);
            setVeloY(0);
            console.log('arrow right pressed')
        }
    };
    
    const initGame = () => {
        if (gameOver) return handleGameOver();
    
        // when snake eat food
        if (snakeX === foodX && snakeY === foodY){
            updateFoodPosition()
            snakeBody.push([foodY, foodX])  // add food to snake body array
            // setSnakeBody((prevCoordinates) => [...prevCoordinates, [foodY, foodX]]);
            score++
            highScore = score >= highScore ? score : highScore  // if score > high score => high score = score
    
            localStorage.setItem("high-score", highScore.toString())
        }
    
        // update snake head
        setSnakeX ((prev) => prev + velocityX)
        setSnakeY ((prev) => prev + velocityY)
    
        // shifting forward values of elements in snake body by one
    
        for(let i = snakeBody.length - 1; i>0; i--){
            snakeBody[i] = snakeBody[i-1]
        }
    
        snakeBody[0] = [snakeX, snakeY]
    
        // check snake body is out of wall or no
    
        if (snakeX <=0 || snakeX >screenWidth || snakeY <=0 || snakeY >screenHeight) {
            console.log('snake is out of wall')
            setGameOver(true)
        }
    
        // add div for each part of snake body
    
        for(let i = 0; i<snakeBody.length; i++){    
            // check snake head hit body or no
            if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
                console.log('snake head hit body')
                setGameOver(true)
            }
        }
    }

    // render snake
    const renderSnake = () => {
        return snakeBody.map((segment, index: number) => (
           
            <View key={index} style={{
                width: 10,
                height: 10,
                backgroundColor: 'green',
                position: 'absolute',
                left: segment[0],
                top: segment[1],
            }} />
        ));
    };


    useEffect(() => {
    
        const intervalId = setInterval(updateFoodPosition, 500);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <Screen>
            <View style={styles.wrapper}>
                <TextInput onKeyPress={changeDirection}>
                </TextInput>
                <View style={styles.gameDetails}>
                    <Text style={{fontSize: 20, marginLeft: 10}}>Score: {score}</Text>
                    <Text style={{fontSize: 20, marginLeft: 20}}>High Score: {highScore}</Text>
                    
                </View>

                <View style={styles.playBoard}>
                    <View>{FoodPoint(foodX, foodY)}</View>
                    {snakeBody.map((segment, index: number) => (
                        <View key={index} style={{
                            width: 10,
                            height: 10,
                            backgroundColor: 'green',
                            position: 'absolute',
                            left: segment[0],
                            top: segment[1],
                        }} />
                    ))}
                </View>

                <View style={styles.controls}>                 
                    <TouchableOpacity onPress={() => changeDirection('ArrowLeft')} style={styles.button}>
                        <Icon name="arrow-left" size={30} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeDirection('ArrowUp')} style={styles.button}>
                        <Icon name="arrow-up" size={30} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeDirection('ArrowRight')} style={styles.button}>
                        <Icon name="arrow-right" size={30} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeDirection('ArrowDown')} style={styles.button}>
                        <Icon name="arrow-down" size={30} color='white'/>                    
                    </TouchableOpacity>
                </View>
            </View>
        
        </Screen>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%', // Please note that 'vmin' is a CSS unit and not available in React Native
        height: '100%', // Please note that 'vmin' is a CSS unit and not available in React Native
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
        // justifyContent: 'center',
        backgroundColor: '#293447',
        borderRadius: 5,
        shadowColor: '#3457dc',
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.2,
        shadowRadius: 40,
        elevation: 5, // Use 'elevation' property for shadow in React Native
    },
    
    gameDetails: {
        // color: '#b8c6dc',
        backgroundColor: 'yellow',
        fontWeight: '500',
        fontSize: 40,
        height: '5%', 
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    gameDetailsText: {
        
    },
    playBoard: {
        height: '88%',
        display: 'flex',
        backgroundColor: '#212837',
        // backgroundColor: 'green',
        // gridTemplateColumns: 'repeat(30, 1fr)',
        // gridTemplateRows: 'repeat(30, 1fr)',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
    button: {
        // paddingVertical: 25,
        // fontSize: 20,
        // width: '25%',
        // textAlign: 'center',
        // cursor: 'pointer',
        // color: '#b8c6dc',
        // color: 'red',
        // borderRightWidth: 1,
        // borderRightColor: '#171b26',
        alignItems: 'center',
    },
});
  
