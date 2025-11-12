import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import SignUpScreen from "./SignUpScreen";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "465420601192-0t4babud6gstnlm796uhti1m0k4v0upv.apps.googleusercontent.com",
    webClientId: "465420601192-0t4babud6gstnlm796uhti1m0k4v0upv.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          Alert.alert("Success", "Logged in with Google!");
        })
        .catch((err) => {
          Alert.alert("Error", err.message);
        });
    }
  }, [response]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      Alert.alert("Success", "Logged in!");
    } catch (error) {
      Alert.alert("Login error", error.message);
    }
  };

  if (showSignUp) return <SignUpScreen onBack={() => setShowSignUp(false)} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login (Email/Password)" onPress={handleLogin} />
      <View style={{ height: 12 }} />
      <Button title="Sign in with Google" onPress={() => promptAsync()} disabled={!request} />
      <TouchableOpacity style={{ marginTop: 16 }} onPress={() => setShowSignUp(true)}>
        <Text style={{ color: "blue" }}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  title: { fontSize: 28, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    marginBottom: 12,
    borderRadius: 6
  }
});
