import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TrackListScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Track List Screen</Text>
      <Button title="Go to Track Detail" onPress={() => navigation.navigate("TrackDetail")} />
    </View>
  );
}

TrackListScreen.navigationOptions = () => {
  return {
    headerTitle: "Track List",
    // tabBarLabel: "List Track j",
  };
};

const styles = StyleSheet.create({});
