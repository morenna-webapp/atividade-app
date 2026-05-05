import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Ex02() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Morenna</Text>
      </View>

      <View style={styles.content}>
        <Text>idade:18, Gosta de :cantar.</Text>
      </View>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  header: {
    height: 60,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  content: { flex: 1, backgroundColor: "#e0e0e0", padding: 20 },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#03dac6",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  fabText: { fontSize: 24, color: "#000" },
});
