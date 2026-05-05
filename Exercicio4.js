import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Ex04() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? 0.7 : 1,
            transform: [{ scale: pressed ? 0.97 : 1 }],
          },
        ]}
      >
        <Text style={styles.text}>aperte</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    backgroundColor: "#ff3b30",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  text: { color: "white", fontWeight: "bold", fontSize: 16 },
});
