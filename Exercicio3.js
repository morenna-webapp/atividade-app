import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default function Ex03() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cells = Array.from({ length: 9 });

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {cells.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.cell, activeIndex === index && styles.cellActive]}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 10 },
  grid: { flexDirection: "row", flexWrap: "wrap", width: "100%" },
  cell: {
    width: "33.33%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  cellActive: { backgroundColor: "#FFC0CB" },
});
