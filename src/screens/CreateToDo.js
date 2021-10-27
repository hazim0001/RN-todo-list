import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";

const CreateToDo = ({ navigation, addTodo }) => {
  const [input, setInput] = useState("");

  return (
    <View>
      <Text>CreateToDo</Text>
      <TextInput
        placeholder="Create New Todo"
        defaultValue={input}
        onChangeText={(text) => setInput(text)}
        style={styles.textInput}
      />
      <Text>{input}</Text>
      <Button title="Create New Todo" onPress={() => addTodo(input)} />
    </View>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch({ type: "addTodo", payload: text }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateToDo);

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
