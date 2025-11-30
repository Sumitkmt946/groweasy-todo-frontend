// src/screens/SignupScreen.js
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

const SignupScreen = ({ navigation }) => {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSignup = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Validation", "Please fill all fields");
      return;
    }

    try {
      setSubmitting(true);
      await signup(name.trim(), email.trim(), password);
      // signup ke baad AuthContext me login ho jaoge & tabs open
    } catch (err) {
      console.log(err?.response?.data || err.message);
      Alert.alert(
        "Signup failed",
        err?.response?.data?.detail || "Something went wrong"
      );
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
        <Text style={globalStyles.title}>Create account ✨</Text>
        <Text style={globalStyles.subtitle}>
          Sign up to get started with GrowEasy
        </Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Full name"
          value={name}
          onChangeText={setName}
        />

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
          onPress={onSignup}
          disabled={submitting}
        >
          <Text style={globalStyles.primaryButtonText}>
            {submitting ? "Creating account..." : "Sign Up"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={globalStyles.linkText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
