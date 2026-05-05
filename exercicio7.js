import React, { createContext, useContext, useState, useEffect } from "react";
import { View, Text, useColorScheme, StyleSheet, Switch } from "react-native";

const lightColors = {
  background: "#ffffff",
  text: "#000000",
  primary: "#6200ee",
};
const darkColors = {
  background: "#121212",
  text: "#ffffff",
  primary: "#bb86fc",
};

const ThemeContext = createContext({
  theme: lightColors,
  isDark: false,
  toggleTheme: () => {},
});

export default function Ex07() {
  const systemScheme = useColorScheme();

  const [isDark, setIsDark] = useState(systemScheme === "dark");

  useEffect(() => {
    setIsDark(systemScheme === "dark");
  }, [systemScheme]);

  const theme = isDark ? darkColors : lightColors;
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text, fontSize: 18, marginBottom: 20 }}>
        Tema atual: {isDark ? "Escuro" : "Claro"}
      </Text>

      <View style={styles.switchContainer}>
        <Text style={{ color: theme.text, marginRight: 10 }}>
          Mudar Tema Manualmente
        </Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>

      <View style={[styles.box, { backgroundColor: theme.primary }]}>
        <Text style={{ color: theme.background, fontWeight: "bold" }}>
          Componente Reativo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  box: { padding: 15, marginTop: 30, borderRadius: 8 },
});
