import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { Video } from "expo-av";
import * as Animatable from "react-native-animatable";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Callback to handle the video playback status update
  const handlePlaybackStatusUpdate = (status) => {
    console.log("Video Status:", status);
    if (status.didJustFinish) {
      // If the video just finished playing, replay it
      videoRef.replayAsync();
    }
  };

  const handleLogin = () => {
    // Check if the password field is empty
    if (!password) {
      setPasswordError(true);
      return;
    }
    // Perform login logic here, e.g., call an API or check credentials.
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSignUp = () => {
    setIsSignUpForm(true);
  };

  const handleRegistration = () => {
    if (password) {
      setPasswordError(false);
    }
    if (!password) {
      setPasswordError(true);
      return;
    }
    // Perform registration logic here, e.g., call an API to register the user.
    console.log("Registered with Email:", email);
    console.log("Registered with Password:", password);
    // After successful registration, you may want to reset the form or navigate to another screen.
  };

  const handleSignUpNowPress = () => {
    // Apply the animation when the "Sign up now" text is pressed
    // For example, bounce animation:
    this.signupTextRef.bounce(200).then(() => {
      // After the animation, trigger the sign-up form change
      handleSignUp();
    });
  };

  const handleLoginNowPress = () => {
    // Apply the animation when the "Login" text is pressed
    // For example, bounce animation:
    this.loginTextRef.bounce(200).then(() => {
      // After the animation, trigger the login form change (if you need to handle anything for the login form)
      console.log("Login form is displayed.");
      setIsSignUpForm(false);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {/* Video Background */}
        <Video
          ref={(ref) => (videoRef = ref)}
          source={require("./assets/video.mp4")}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
          isLooping
          shouldPlay
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        />

        {/* Placeholder for the Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/Placeholder.png")}
            style={styles.logo}
          />
        </View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
          error={passwordError}
        />
        {passwordError && (
          <Text style={styles.errorText}>Password is required!</Text>
        )}
        {isSignUpForm ? (
          <>
            <Button
              mode="contained"
              onPress={handleRegistration}
              style={styles.signupButton}
            >
              Register
            </Button>
            <Animatable.Text
              ref={(ref) => (this.loginTextRef = ref)}
              style={styles.loginText}
              onPress={handleLoginNowPress}
            >
              Already have an account?{" "}
              <Text
                style={styles.loginLink}
                onPress={() => {
                  handleLoginNowPress();
                }}
              >
                Login
              </Text>
            </Animatable.Text>
          </>
        ) : (
          <>
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.loginButton}
            >
              Login
            </Button>
            <Animatable.Text
              ref={(ref) => (this.signupTextRef = ref)}
              style={styles.signupText}
              onPress={handleSignUpNowPress}
            >
              New User?{" "}
              <Text style={styles.signupLink} onPress={handleSignUpNowPress}>
                Sign up now
              </Text>
            </Animatable.Text>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  input: {
    marginBottom: 16,
    borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    opacity: 0.9,
  },
  loginButton: {
    marginTop: 16,
  },
  signupButton: {
    marginTop: 16,
  },
  signupText: {
    textAlign: "center",
    marginTop: 16,
    color: "white",
  },
  signupLink: {
    color: "blue",
  },
  loginText: {
    textAlign: "center",
    marginTop: 16,
    color: "white",
  },
  loginLink: {
    color: "blue",
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 70,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default LoginScreen;
