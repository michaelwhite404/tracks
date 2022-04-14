import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function SignupScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Signup Screen</Text>
      <Button title="Go to Signin" onPress={() => navigation.navigate("Signin")} />
      <Button title="Go to Main Flow" onPress={() => navigation.navigate("mainFlow")} />
    </View>
  );
}

const styles = StyleSheet.create({});
