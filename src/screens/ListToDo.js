import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { connect } from "react-redux";
const ListToDo = () => {
  return (
    <View>
      <Text>ListToDo</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch({ type: "addTodo", payload: text }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);

const styles = StyleSheet.create({});
