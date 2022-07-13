import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useState } from "react";

const CreateTaskScreen = () => {
  const list = [
    {
      id: 1,
      title: "Task 1",
    },
    {
      id: 2,
      title: "Task 2",
    },
  ];

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(list)

  const changeInput = (task) => setTask(task);

  const addTask = () => {
    setTaskList(currentItems => 
        [...currentItems, { id: Date.now(), title: task}]
    );
    setTask('');
  }
  
  const deleteTask = (id) => {
    setTaskList(currentItems => currentItems.filter(item => item.id !== id))
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Tasks</Text>
      </View>
      <View View style={styles.viewFlat}>
        <FlatList
          style={styles.flatList}
          data={taskList}
          renderItem={({ item }) => (
            <View style={{ ...styles.action, justifyContent: "space-between" }}>
              <Text style={styles.item}>{item.title}</Text>
              <Button 
                title="Delete" 
                onPress={() => deleteTask(item.id)}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.action}>
        <TextInput 
          style={styles.input}
          value={task}
          placeholder="Enter task title" 
          onChangeText={changeInput}
        />
        <Button
          title="Add"
          onPress={addTask}
          disabled={task.length < 1 ? true : false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewFlat: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 30,
    color: "#000",
    textAlign: "center",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    margin: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "blue",
    width: "15%",
    padding: 12,
    height: "80%",
    alignItems: "center",
    borderRadius: 100,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default CreateTaskScreen;
