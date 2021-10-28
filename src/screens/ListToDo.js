import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import Todo from "../components/Todo";

const ListToDo = (props) => {
  console.log(props);
  const DATA = props.todos;

  const renderTodo = ({ item }) => {
    // console.log(data);
    const { id, title, completedTask } = item;
    return <Todo id={id} title={title} completedTask={completedTask} />;
  };

  return (
    <View>
      <Text>ListToDo</Text>
      <FlatList
        data={DATA}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return { todos: state.todo };
};

export default connect(mapStateToProps)(ListToDo);
// export default ListToDo;

const styles = StyleSheet.create({});
