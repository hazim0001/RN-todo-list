import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  Button,
  Pressable,
} from "react-native";
import { connect } from "react-redux";
import Todo from "../components/Todo";

const ListToDo = (props) => {
  const [modalVisible, setModalVisible] = useState(true);

  const DATA = props.todos;

  const renderTodo = ({ item }) => {
    // console.log(data);
    const { id, title, completedTask } = item;
    return <Todo id={id} title={title} completedTask={completedTask} />;
  };

  const hideAndNav = () => {
    setModalVisible(!modalVisible);
    props.navigation.navigate("ListPost");
  };

  return (
    <View>
      <Text>ListToDo</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onShow={() => {
          console.log("showed");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>CarServ</Text>
            <View style={styles.modalBtns}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => hideAndNav()}
              >
                <Text style={styles.textStyle}>List Post</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Button title="Modal" onPress={() => setModalVisible(true)} />

      <FlatList
        data={DATA}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todo };
};

export default connect(mapStateToProps)(ListToDo);
// export default ListToDo;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    width: "100%",
    height: "45%",
    // borderWidth: 1,
    // borderColor: "black",
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBtns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "black",
  },
});
