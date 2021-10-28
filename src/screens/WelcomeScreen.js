import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to ToDoApp</Text>
      <Button
        title="Todo Index"
        onPress={() => navigation.navigate("ListToDo")}
      />
      <Button
        title="New Todo"
        onPress={() => navigation.navigate("CreateToDo")}
      />
      <Button
        title="Post Index"
        onPress={() => navigation.navigate("ListPost")}
      />
      <Button
        title="New Post"
        onPress={() => navigation.navigate("CreatPost")}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
