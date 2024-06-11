import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Calculator")}
                >
                    <Image source={require('../../assets/images/calculator.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>CALCULATOR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Dzikir")}
                >
                    <Image source={require('../../assets/images/tasbeh.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>DZIKIR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Gallery")}
                >
                    <Image source={require('../../assets/images/gallery.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>GALLERY</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Contact")}
                >
                    <Image source={require('../../assets/images/contacts.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>CONTACT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    row: {
        flexDirection: "row",
    },
    button: {
        backgroundColor: "#42a5f5",
        padding: 20,
        margin: 10,
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default HomeScreen;
