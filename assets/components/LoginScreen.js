import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    // NOTIF GAGAL LOGIN
    const notif = () => {
        if (!userEmail) {
            alert('MASUKAN EMAIL ATAU PASSWORD UNTUK LOGIN');
            return;
        }
        if (!userPassword) {
            alert('MASUKAN PASSWORD UNTUK LOGIN');
            return;
        }

        // Simulasi login
        AsyncStorage.setItem('username', userEmail);
        AsyncStorage.setItem('password', userPassword);

        navigation.replace('Home');
    };

    return (
        <View style={styles.mainBody}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <KeyboardAvoidingView enabled>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('./logo.png')} style={{ width: 70, height: 70 }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                            selectionColor='red'
                            placeholder='Masukan Email'
                            placeholderTextColor='#8b9cb5'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            returnKeyType='next'
                            underlineColorAndroid='#f000'
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                            placeholder='Masukan Password'
                            placeholderTextColor='#8b9cb5'
                            keyboardType='default'
                            blurOnSubmit={false}
                            secureTextEntry={true}
                            underlineColorAndroid='#f000'
                            returnKeyType='next'
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={notif}
                    >
                        <Text style={styles.buttonTextStyle}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 5,
        marginLeft: 25,
        marginRight: 25,
        margin: 10,
    },
    inputStyle: {
        backgroundColor: '#FFF',
        flex: 1,
        color: '#000',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#dadae8',
    },
    buttonStyle: {
        backgroundColor: '#007bff',
        height: 40,
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 16,
    },
});

export default LoginScreen;