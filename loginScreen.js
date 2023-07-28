import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here, e.g., call an API or check credentials.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    // Navigate to the sign-up screen
    navigation.navigate('SignUp');
  };

  return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                          accessible={false}>
    <View style={styles.container}>
           <LinearGradient colors={['rgba(0, 0, 255, 0.7)', 'rgba(255, 255, 255, 0.9)']} style={styles.gradient}>
        {/* Placeholder for the Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('./assets/Placeholder.png')} style={styles.logo} />
        </View>
      </LinearGradient>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
        Login
      </Button>
      <Text style={styles.signupText}>
        New User?{' '}
        <Text style={styles.signupLink} onPress={handleSignUp}>
          Sign up now
        </Text>
      </Text>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  input: {
    marginBottom: 16,
  },
  loginButton: {
    marginTop: 16,
  },
  signupText: {
    textAlign: 'center',
    marginTop: 16,
  },
  signupLink: {
    color: 'blue',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 100,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
