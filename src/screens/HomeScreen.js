import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./WelcomeScreen";
import ListToDo from "./ListToDo";
import CreateToDo from "./CreateToDo";
import ListPost from "./ListPost";
import CreatePost from "./CreatePost";
import BackButton from "../components/BackButton";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen
        name="ListToDo"
        component={ListToDo}
        options={{
          headerRight: () => {
            return (
              <Button
                title="Add"
                onPress={() => navigation.navigate("CreateToDo")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CreateToDo"
        component={CreateToDo}
        options={{
          headerLeft: () => {
            return <BackButton title={"Main Menu"} navigation={navigation} />;
          },
        }}
      />
      <Tab.Screen name="CreatePost" component={CreatePost} />
      <Tab.Screen
        name="ListPost"
        component={ListPost}
        options={{
          headerRight: () => {
            return (
              <Button
                title="Add"
                onPress={() => navigation.navigate("CreatePost")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
