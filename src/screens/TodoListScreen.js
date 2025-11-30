// src/screens/TodoListScreen.js
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Alert,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../api/client";
import TodoItem from "../components/TodoItem";
import { globalStyles } from "../theme/globalStyles";
import { colors } from "../theme/colors";
import { AuthContext } from "../context/AuthContext";

const TodoListScreen = () => {
  const { profile } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [creating, setCreating] = useState(false);

  const loadTodos = async () => {
    try {
      const res = await api.get("/todos/");
      setTodos(res.data);
    } catch (err) {
      console.log(err?.response?.data || err.message);
      Alert.alert("Error", "Failed to load todos");
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const pending = todos.filter((t) => !t.completed);
  const completed = todos.filter((t) => t.completed);

  const onAddTodo = async () => {
    if (!title.trim()) {
      Alert.alert("Validation", "Title is required");
      return;
    }

    try {
      setCreating(true);
      const res = await api.post("/todos/", {
        title: title.trim(),
        description: description.trim() || null,
      });
      setTodos((prev) => [res.data, ...prev]);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.log(err?.response?.data || err.message);
      Alert.alert("Error", "Failed to create todo");
    } finally {
      setCreating(false);
    }
  };

  const onToggleTodo = async (todo) => {
    try {
      const res = await api.patch(`/todos/${todo.id}`, {
        completed: !todo.completed,
      });
      setTodos((prev) =>
        prev.map((t) => (t.id === todo.id ? res.data : t))
      );
    } catch (err) {
      console.log(err?.response?.data || err.message);
      Alert.alert("Error", "Failed to update todo");
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTodos();
    setRefreshing(false);
  };

  const firstName = profile?.name?.split(" ")[0] || "there";

  return (
    <View style={globalStyles.screen}>
      {/* greeting + hero card */}
      <Text style={styles.helloText}>Hello, {firstName} 👋</Text>
      <Text style={styles.heading}>Your Projects</Text>

      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientPurple]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.heroCard}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.heroSubtitle}>Daily Tasks</Text>
          <Text style={styles.heroTitle}>Today&apos;s Focus</Text>

          <View style={styles.heroStatsRow}>
            <Text style={styles.heroStatsNumber}>
              {completed.length}/{todos.length || 0}
            </Text>
            <Text style={styles.heroStatsLabel}>tasks done</Text>
          </View>
        </View>

        {/* big round + button */}
        <TouchableOpacity
          style={styles.fab}
          onPress={onAddTodo}
          disabled={creating || !title.trim()}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* add new task card */}
      <View style={styles.newTaskCard}>
        <Text style={styles.newTaskTitle}>New Task</Text>
        <TextInput
          style={styles.newTaskInput}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.newTaskInput, { marginBottom: 0 }]}
          placeholder="Description (optional)"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <ScrollView
        style={{ marginTop: 18 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Text style={styles.sectionTitle}>Today</Text>
        {pending.length === 0 ? (
          <Text style={styles.emptyText}>
            No pending tasks. Add a new one above.
          </Text>
        ) : (
          pending.map((item) => (
            <TodoItem key={item.id.toString()} todo={item} onToggle={onToggleTodo} />
          ))
        )}

        {completed.length > 0 && (
          <>
            <Text style={[styles.sectionTitle, { marginTop: 22 }]}>
              Completed ({completed.length})
            </Text>
            {completed.map((item) => (
              <TodoItem
                key={item.id.toString()}
                todo={item}
                onToggle={onToggleTodo}
              />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  helloText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textDark,
    marginBottom: 14,
  },
  heroCard: {
    borderRadius: 28,
    padding: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 14,
  },
  heroSubtitle: {
    color: "#F5F7FF",
    fontSize: 13,
    marginBottom: 4,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
  heroStatsRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 16,
  },
  heroStatsNumber: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "700",
    marginRight: 6,
  },
  heroStatsLabel: {
    color: "#E5E9FF",
    fontSize: 13,
  },
  fab: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  fabText: {
    fontSize: 30,
    color: colors.gradientPurple,
    fontWeight: "700",
    marginTop: -2,
  },
  newTaskCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  newTaskTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textDark,
    marginBottom: 8,
  },
  newTaskInput: {
    backgroundColor: "#F8F9FC",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textDark,
    marginBottom: 10,
    marginTop: 6,
  },
  emptyText: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: 10,
  },
});

export default TodoListScreen;
