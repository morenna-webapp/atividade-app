import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
  useColorScheme,
  Platform,
} from "react-native";

const POSTS = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i),
  uri: `https://images.unsplash.com/photo-${
    1500000000000 + i * 10000
  }?auto=format&fit=crop&w=200&q=80`,
}));

const FEED_IMAGES = [
  "https://picsum.photos/id/145/200",
  "https://picsum.photos/id/158/200",
  "https://picsum.photos/id/175/200",
  "https://picsum.photos/id/211/200",
  "https://picsum.photos/id/249/200",
  "https://picsum.photos/id/259/200",
  "https://picsum.photos/id/274/200",
  "https://picsum.photos/id/292/200",
  "https://picsum.photos/id/326/200",
  "https://picsum.photos/id/334/200",
  "https://picsum.photos/id/338/200",
  "https://picsum.photos/id/349/200",
];

export default function Ex10() {
  const isDark = useColorScheme() === "dark";
  const theme = {
    bg: isDark ? "#121212" : "#fff5f8",
    card: isDark ? "#1e1e1e" : "#ffffff",
    text: isDark ? "#fff" : "#2b1c1c",
    textMuted: isDark ? "#aaa" : "#885f68",
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=150&q=80",
          }}
          style={styles.avatar}
        />
        <Text style={[styles.name, { color: theme.text }]}>
          Sabrina Carpenter
        </Text>
        <Text style={[styles.role, { color: theme.textMuted }]}>
          Cantora, Compositora & Atriz
        </Text>
      </View>

      <View style={[styles.statsCard, { backgroundColor: theme.card }]}>
        <Stat label="Posts" value="1.4k" theme={theme} />
        <Stat label="Seguidores" value="40.5M" theme={theme} />
        <Stat label="Seguindo" value="184" theme={theme} />
      </View>

      <Pressable
        style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.7 : 1 }]}
      >
        <Text style={styles.btnText}>Seguir</Text>
      </Pressable>

      <FlatList
        data={FEED_IMAGES}
        keyExtractor={(item, index) => String(index)}
        numColumns={3}
        contentContainerStyle={styles.postList}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.postImage} />
        )}
      />
    </View>
  );
}

function Stat({ label, value, theme }) {
  return (
    <View style={styles.statItem}>
      <Text style={[styles.statValue, { color: theme.text }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: theme.textMuted }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: "center", paddingTop: 40, paddingBottom: 20 },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ffb3c6",
  },
  name: { fontSize: 24, fontWeight: "bold" },
  role: { fontSize: 14, marginTop: 4 },
  statsCard: {
    flexDirection: "row",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#ffb3c6",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: { elevation: 4 },
      default: { boxShadow: "0px 4px 6px rgba(255, 179, 198, 0.3)" },
    }),
  },
  statItem: { flex: 1, alignItems: "center" },
  statValue: { fontSize: 18, fontWeight: "bold" },
  statLabel: { fontSize: 12, marginTop: 4 },
  btn: {
    backgroundColor: "#ff4d6d",
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  btnText: { color: "white", fontWeight: "bold", fontSize: 16 },
  postList: { paddingHorizontal: 2, paddingBottom: 20 },
  postImage: { flex: 1, aspectRatio: 1, margin: 2, backgroundColor: "#f0f0f0" },
});
