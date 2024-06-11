
import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const KalkulatorScreen = ({ navigation }) => {

    // State variables 
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    // Function to handle number inputs 
    const handleNumberInput = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    // Function to handle operator inputs 
    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };

    // Function to handle equal button press 
    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        if (operator === '+') {
            setDisplayValue((num1 + num2).toString());
        } else if (operator === '-') {
            setDisplayValue((num1 - num2).toString());
        } else if (operator === '*') {
            setDisplayValue((num1 * num2).toString());
        } else if (operator === '/') {
            setDisplayValue((num1 / num2).toString());
        }

        setOperator(null);
        setFirstValue('');
    };

    // Function to handle clear button press 
    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.displayContainer}>
                <Text style={styles.displayText}>
                    {displayValue}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(1)}
                    >
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(2)}
                    >
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(3)}
                    >
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.operatorButton]}
                        onPress={() => handleOperatorInput('+')}
                    >
                        <Text style={[
                            styles.buttonText,
                            styles.operatorButtonText
                        ]}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(4)}
                    >
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(5)}
                    >
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(6)}
                    >
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.operatorButton]}
                        onPress={() => handleOperatorInput('-')}
                    >
                        <Text style={[
                            styles.buttonText,
                            styles.operatorButtonText
                        ]}>
                            −
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(7)}
                    >
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(8)}
                    >
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(9)}
                    >
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.operatorButton]}
                        onPress={() => handleOperatorInput('*')}
                    >
                        <Text style={[
                            styles.buttonText,
                            styles.operatorButtonText
                        ]}>
                            *
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNumberInput(0)}
                    >
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.clearButton]}
                        onPress={handleClear}>
                        <Text style={styles.clearButtonText}>CLR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.equalButton]}
                        onPress={handleEqual}
                    >
                        <Text style={styles.equalButtonText}>=</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.operatorButton]}
                        onPress={() => handleOperatorInput('/')}
                    >
                        <Text style={[
                            styles.buttonText,
                            styles.operatorButtonText
                        ]}>
                            /
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default KalkulatorScreen;

// Styles 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    displayContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    displayText: {
        fontSize: 48,
        color: '#333',
    },
    buttonContainer: {
        flex: 3,
        width: '80%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        elevation: 3,
        margin: 2,
        padding: 15,
    },
    buttonText: {
        fontSize: 34,
        color: '#FFF',
    },
    operatorButton: {
        backgroundColor: '#bcbcbc',
    },
    operatorButtonText: {
        color: '#008080',
    },
    equalButton: {
        backgroundColor: '#52bf90'
    },
    equalButtonText: {
        fontSize: 32,
        color: '#fff',
    },
    clearButton: {
        backgroundColor: '#d9534f'
    },
    clearButtonText: {
        fontSize: 24,
        color: '#FFF',
    },
});