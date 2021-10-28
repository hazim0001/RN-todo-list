import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";

const CreatePost = ({ navigation, addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addAndNavigate = () => {
    addPost(title, content);
    navigation.navigate("ListPost");
  };
  return (
    <View>
      <Text>post</Text>

      <TextInput
        placeholder="Post title"
        defaultValue={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Post content"
        defaultValue={content}
        onChangeText={(text) => setContent(text)}
        style={styles.textInput}
      />
      <Button title="Create New Post" onPress={() => addAndNavigate()} />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title, content) =>
      dispatch({ type: "ADDPOST", payload: { title, content } }),
  };
};

export default connect(null, mapDispatchToProps)(CreatePost);

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    marginTop: 30,
    marginHorizontal: 20,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
  },
});
