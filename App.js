import React from "react";
import { SafeAreaView } from "react-native";
import { AuthProvider } from "./src/contexts/AuthContext";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <LoginScreen />
      </SafeAreaView>
    </AuthProvider>
  );
}
