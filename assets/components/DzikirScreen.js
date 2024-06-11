//DzikirScreen.js
import React, { useState } from "react";
import {
    View, Text,
    TextInput, TouchableOpacity,
    StyleSheet
} from "react-native";

const App = () => {
    const [counter, setCounter] = useState(0);
    const [initialCount, setInitialCount] = useState(0);

    const handleInitialCountChange = (value) => {
        setInitialCount(Number(value));
    };

    const handleReset = () => {
    };

    const handleClick1 = () => {
        setCounter(counter + 1);
    };

    const handleClick2 = () => {
        setCounter(initialCount);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Aplikasi Penghitung Dzikir
            </Text>
            <Text style={styles.header}>
                Sudahkah anda dzikir?
            </Text>
            <Text style={styles.counterValue}>
                {counter}
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}
                    onPress={handleClick1}>
                    <Text>Tambah</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={handleClick2}>
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
    },
    header: {
        fontSize: 18,
        marginVertical: 10,
        color: "#333",
        textTransform: "uppercase",
    },
    heading: {
        color: "green",
        fontSize: 35,
        textAlign: "center", 
    },
    counterValue: {
        fontSize: 36,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#007bff",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        fontSize: 16,
        padding: 13,
        margin: 5,
        borderRadius: 8,
        backgroundColor: "green",
        elevation: 20,
    },
    setInitialCountButton: {
        padding: 10,
        fontSize: 16,
        margin: 15,
        borderRadius: 8,
        backgroundColor: "blue",
        elevation: 20,
    },
});

export default App;

