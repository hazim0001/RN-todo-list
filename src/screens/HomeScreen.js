import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./WelcomeScreen";
import ListToDo from "./ListToDo";
import CreateToDo from "./CreateToDo";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="ListToDo" component={ListToDo} />
      <Tab.Screen name="CreateToDo" component={CreateToDo} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
