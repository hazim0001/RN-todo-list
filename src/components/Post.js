import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Post = ({ id, title, content }) => {
  return (
    <View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />
      <Text>
        {id} --- {title}
      </Text>

      <Text>{content}</Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
