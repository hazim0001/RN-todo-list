import React from "react";
import { StyleSheet, View, Button } from "react-native";

const BackButton = ({ navigation, title }) => {
  return (
    <View>
      <Button
        title={title}
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
