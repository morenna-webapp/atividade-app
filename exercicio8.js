import React from "react";
import styled, { ThemeProvider } from "styled-components/native";

const theme = {
  colors: { primary: "#007aff", text: "#333" },
  spacing: { m: 16, l: 24 },
};

const Typography = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => (props.variant === "H1" ? "24px" : "16px")};
  font-weight: ${(props) => (props.variant === "H1" ? "bold" : "normal")};
`;

const Card = styled.View`
  background-color: white;
  padding: ${(props) => props.theme.spacing[props.$spacing || "m"]}px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  elevation: 3;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px;
  border-radius: 6px;
  align-items: center;
  margin-top: 16px;
`;

export default function Ex08() {
  return (
    <ThemeProvider theme={theme}>
      <Card $spacing="l">
        <Typography variant="H1">Design System</Typography>
        <Typography variant="Body">
          Usando styled-components no React Native.
        </Typography>
        <Button>
          <Typography style={{ color: "white" }}>Clique Aqui</Typography>
        </Button>
      </Card>
    </ThemeProvider>
  );
}
