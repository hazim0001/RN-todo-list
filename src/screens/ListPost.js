import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import Post from "../components/Post";

const ListPost = (props) => {
  POSTS_DATA = props.posts;

  const renderPosts = ({ item }) => {
    const { id, title, content } = item;
    return <Post id={id} title={title} content={content} />;
  };
  return (
    <View>
      <Text>postssss</Text>
      <FlatList
        data={POSTS_DATA}
        keyExtractor={(post) => post.id}
        renderItem={renderPosts}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.post };
};

export default connect(mapStateToProps)(ListPost);

const styles = StyleSheet.create({});
