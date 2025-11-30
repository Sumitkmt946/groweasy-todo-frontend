// src/screens/ProfileScreen.js
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { globalStyles } from "../theme/globalStyles";
import { colors } from "../theme/colors";

const ProfileScreen = () => {
  const { profile, logout } = useContext(AuthContext);

  const initial =
    profile?.name && profile.name.length > 0
      ? profile.name[0].toUpperCase()
      : "?";

  return (
    <View style={globalStyles.screen}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
        <Text style={styles.name}>{profile?.name || "User"}</Text>
        <Text style={styles.email}>{profile?.email || ""}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Account</Text>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Name</Text>
          <Text style={styles.rowValue}>{profile?.name || "-"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Email</Text>
          <Text style={styles.rowValue}>{profile?.email || "-"}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[globalStyles.primaryButton, { backgroundColor: colors.danger, marginTop: 32 }]}
        onPress={logout}
      >
        <Text style={globalStyles.primaryButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 24,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  avatarText: {
    color: colors.white,
    fontSize: 36,
    fontWeight: "700",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textDark,
  },
  email: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 2,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: colors.textDark,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  rowLabel: {
    fontSize: 14,
    color: colors.textMuted,
  },
  rowValue: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textDark,
  },
});

export default ProfileScreen;
