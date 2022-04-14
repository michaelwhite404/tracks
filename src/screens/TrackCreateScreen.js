import React from "react";
import { StyleSheet, Text, View } from "react-native";

function TrackCreateScreen() {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Track Create Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

TrackCreateScreen.navigationOptions = () => ({
  tabBarLabel: "Create Track",
});

export default TrackCreateScreen;
