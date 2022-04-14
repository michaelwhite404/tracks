import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function SigninScreen({ navigation }) {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Signin Screen</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate("Signup")} />
    </>
  );
}

const styles = StyleSheet.create({});
