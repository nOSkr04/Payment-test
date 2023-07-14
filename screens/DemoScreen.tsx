import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
const DemoScreen = () => {
  return (
    <View>
      <Text>DemoScreen</Text>
    </View>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({});
