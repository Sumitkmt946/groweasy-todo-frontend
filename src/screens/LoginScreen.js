// src/screens/LoginScreen.js
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { globalStyles } from "../theme/globalStyles";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Validation", "Please fill all fields");
      return;
    }

    try {
      setSubmitting(true);
      await login(email.trim(), password);
    } catch (err) {
      console.log(err?.response?.data || err.message);
      Alert.alert("Login failed", "Incorrect email or password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={globalStyles.authContainer}>
        <Text style={globalStyles.title}>Welcome back 👋</Text>
        <Text style={globalStyles.subtitle}>
          Login to continue managing your tasks
        </Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={[
            globalStyles.primaryButton,
            submitting && { opacity: 0.7 },
          ]}
          onPress={onLogin}
          disabled={submitting}
        >
          <Text style={globalStyles.primaryButtonText}>
            {submitting ? "Logging in..." : "Login"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={globalStyles.linkText}>
            Don&apos;t have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
