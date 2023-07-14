import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import useRevenueCat from "../hooks/useRevenueCat";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { currentOffering, customInfo, isProMember } = useRevenueCat();
  console.log(currentOffering, customInfo, isProMember);
  return (
    <View>
      <Button title={"demo"} onPress={() => navigation.navigate("Demo")} />
      <Button title={"Pay"} onPress={() => navigation.navigate("Paywall")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
