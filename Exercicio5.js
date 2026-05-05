import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function Ex05() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Morenna De Mello</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: {
    padding: 16,
    ...Platform.select({
      ios: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      },
      android: { backgroundColor: "#6200ee", alignItems: "flex-start" },
      default: { backgroundColor: "#6200ee", alignItems: "center" },
    }),
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Platform.OS === "ios" ? "#000" : "#fff",
  },
});
