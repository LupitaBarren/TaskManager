import { React, useState } from 'react'
import { Button, View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'

const TaskManager = () => {
    const [tasks, setTasks] = useState([])
    const [taskId, setTaskId] = useState(1)

    const addTask = () => {
        setTasks([...tasks, {
            id: taskId,
            title: "New Task",
            completed: false,
        }]);
        setTaskId(taskId + 1);
    };

    const clearTasks = () => {
        setTasks([]);
    };

    {/* Iterate over the tasks array, find the task by id and flip its completed status */}
    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map(todo => {
            if (todo.id === id){
                return {
                    ...todo,
                    completed : !todo.completed,
                };
            };
            return todo;
        });
        {/* update the tasks array with the mapped out version */}
        setTasks(updatedTasks)
    }
    
    return (
        <View style={styles.container}>
            
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Today's tasks</Text>
                    <View style={styles.items}>
                        {tasks.map((todo) => (
                            <View style={styles.item} key={todo.id}>
                                <View style={styles.itemLeft}>
                                    {/* Green for not completed, Blue for completed*/}
                                    <TouchableOpacity style={todo.completed ? styles.square : styles.squareC}
                                        onPress={() => toggleTaskCompletion(todo.id)}
                                    ></TouchableOpacity>
                                    <Text style={styles.itemText}>{todo.title}</Text>
                                </View>
                                <View style={styles.circular}></View>
                            </View>
                        ))}
                    </View>
                </View>

                <TouchableOpacity onPress={() => addTask()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>Add</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clearTasks()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>Clear</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
      },
      squareC: {
        width: 24,
        height: 24,
        backgroundColor: '#28A745',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
      },
      itemText: {
        maxWidth: '80%',
      },
      circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
      },     
   });   

export default TaskManager;