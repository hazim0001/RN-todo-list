import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import GestureRecognizer from "react-native-swipe-gestures";

const Todo = ({ id, title, completed, completedTask, deleteTodo }) => {
  return (
    <GestureRecognizer onSwipeLeft={() => deleteTodo(id)}>
      <TouchableOpacity
        onPress={() => {
          completed(id);
        }}
      >
        <View>
          <Text>
            {id} ---- {title}---{completedTask ? "Completed" : "Not Completed"}
          </Text>
        </View>
      </TouchableOpacity>
    </GestureRecognizer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    completed: (id) => dispatch({ type: "completed", payload: id }),
    deleteTodo: (id) => dispatch({ type: "delete", payload: id }),
  };
};

export default connect(null, mapDispatchToProps)(Todo);

const styles = StyleSheet.create({});
