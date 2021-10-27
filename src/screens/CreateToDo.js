import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";

const CreateToDo = ({ navigation, addTodo }) => {
  const [input, setInput] = useState("");

  const addAndNav = () => {
    addTodo(input);
    navigation.navigate("ListToDo");
  };

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
      <Button title="Create New Todo" onPress={() => addAndNav()} />
    </View>
  );
};

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch({ type: "addTodo", payload: text }),
  };
};

export default connect(null, mapDispatchToProps)(CreateToDo);

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
