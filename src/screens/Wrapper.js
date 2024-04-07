import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function Wrapper({ children, style, StatusBarStyles = {} }) {
  const barstyle = {
    barStyle: "dark-content",
    backgroundColor: style?.backgroundColor || "#fff",
    ...StatusBarStyles,
  };
  return (
    <SafeAreaView style={{ ...styles.container, ...style }}>
      <StatusBar {...barstyle} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0104f",
    paddingTop: 0,
  },
});
