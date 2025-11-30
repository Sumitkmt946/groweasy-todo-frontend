// src/components/TodoItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

const TodoItem = ({ todo, onToggle }) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          todo.completed && styles.checkboxDone,
        ]}
        onPress={() => onToggle(todo)}
      >
        {todo.completed && <View style={styles.checkboxInner} />}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            todo.completed && styles.titleDone,
          ]}
        >
          {todo.title}
        </Text>
        {todo.description ? (
          <Text style={styles.description}>{todo.description}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxDone: {
    borderColor: colors.primary,
    backgroundColor: "#E7F0FF",
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textDark,
  },
  titleDone: {
    color: colors.textMuted,
    textDecorationLine: "line-through",
  },
  description: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
});

export default TodoItem;
