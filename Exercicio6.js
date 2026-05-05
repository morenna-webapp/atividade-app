import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function Ex06() {
  const { width } = useWindowDimensions();
  const isLandscape = width > 600;

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Largura atual: {width.toFixed(0)}px</Text>
      <View
        style={[styles.grid, { flexDirection: isLandscape ? "row" : "column" }]}
      >
        <View style={[styles.card, { flex: isLandscape ? 0.5 : 1 }]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, { flex: isLandscape ? 0.5 : 1 }]}>
          <Text>Card 2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  info: { fontSize: 16, marginBottom: 16, textAlign: "center" },
  grid: { flex: 1, gap: 10 },
  card: {
    backgroundColor: "#bb86fc",
    padding: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
