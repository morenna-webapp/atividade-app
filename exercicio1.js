import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";

export default function Ex01() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.image}
        />
        <Text style={styles.title}>feijão com farinha</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: { elevation: 5 },
      default: { boxShadow: "0px 2px 4px rgba(0,0,0,0.25)" },
    }),
  },
  image: { width: 100, height: 100, borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
});
