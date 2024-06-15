import { React, useState } from 'react'
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

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

    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map(todo => {
            // if the task ID exists, change the 'completed' variable
            if (todo.id === id){
                return {
                    ...todo,
                    completed : !todo.completed,
                };
            };
            return todo;
        });
        // update the tasks array with the mapped out version
        setTasks(updatedTasks)
    }
    
    return (
    <View style={styles.container}>
        <Button
        title="Add Task"
        onPress={addTask}
        color="#007bff" // You can customize the color as per your preference
        />
        <Button
        title="Clear Tasks"
        onPress={clearTasks}
        color="#007bff" // You can customize the color as per your preference
        />
        <View style={styles.taskContainer}>
            {tasks.map((todo) => (
                <View style={styles.taskItem} key={todo.id}>
                    <View style={styles.taskContent}>
                        <Text style={styles.taskTitle}>{todo.title}</Text>
                        <Button
                        title={todo.completed ? '-' : '+'}
                        onPress={() => toggleTaskCompletion(todo.id)}
                        color={todo.completed ? '#28a745' : '#dc3545'} // Red for completed, green for not completed
                        />
                        </View>
                        <Text style={styles.taskStatus}>
                            {todo.completed ? 'Completed' : 'Not Completed'}
                            </Text>
                            </View>
                        ))}
                        </View>
                        </View>
                        );
                    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      taskContainer: {
        marginTop: 20,
      },
      taskItem: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 5,
      },
      taskContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
      },
      taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
      },
      taskStatus: {
        fontStyle: 'italic',
        color: '#6c757d',
      },
      button: {
        margin: 10
      }
    });

export default TaskManager;