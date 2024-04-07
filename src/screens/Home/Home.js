import React from "react";
import {
  Button,
  StyleSheet,
  Text,
} from "react-native";
import Wrapper from "../Wrapper";
import { Colors } from "../../constants/Colors";

export default function Home({ navigation }) {
  return (
    <Wrapper style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Details"
          onPress={() => navigation.navigate("Details")}
        ></Button>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
});
