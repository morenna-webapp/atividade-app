import React, { useRef, useEffect, useState } from "react";
import { View, Text, Animated, Easing, Button, StyleSheet } from "react-native";

const BarraDeFelicidade = ({ nivel }) => {
  const animacaoProgressao = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animacaoProgressao, {
      toValue: nivel,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [nivel]);

  const larguraAnimada = animacaoProgressao.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const corAnimada = animacaoProgressao.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ["#FF4500", "#FFD700", "#32CD32"],
  });

  return (
    <View style={styles.trilho}>
      <Animated.View
        style={[
          styles.preenchimento,
          { width: larguraAnimada, backgroundColor: corAnimada },
        ]}
      />
    </View>
  );
};

const MedidorDeAlegria = () => {
  const [felicidade, setFelicidade] = useState(50);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nível de Felicidade: {felicidade} </Text>
      <BarraDeFelicidade nivel={felicidade} />

      <View style={styles.botoes}>
        <Button
          title="+ Alegria "
          onPress={() => setFelicidade(Math.min(100, felicidade + 25))}
          color="#32CD32"
        />
        <Button
          title="+ Tristeza"
          onPress={() => setFelicidade(Math.max(0, felicidade - 25))}
          color="#FF4500"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F0F8FF",
  },
  texto: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  trilho: {
    height: 35,
    width: "100%",
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#CCC",
  },
  preenchimento: {
    height: "100%",
  },
  botoes: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default MedidorDeAlegria;
