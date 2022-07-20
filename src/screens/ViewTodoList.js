import { inject, observer } from 'mobx-react';
import React from 'react'
import { ScrollView, View, Text, StyleSheet } from "react-native";

@inject('todosStore')
@observer
class ViewTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.todosStore.todos &&
                    this.props.todosStore.todos.map(todo => {
                        return (
                            <View style={styles.todoView}>
                                <Text style={styles.todoName}>{todo.name}</Text>
                                <Text style={styles.todoDesc}>{todo.desc}</Text>
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    todos: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10
    },
    titleText: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center'
    },
    todoView: {
        borderBottomWidth: 1,
        padding: 5,
        borderBottomColor: 'rgba(0, 0, 0, 1.0)'
    },
    todoName: {
        fontSize: 18,
        textDecorationLine: 'underline',
        fontWeight: '800'
    },
    todoDesc: {
        paddingTop: 2,
        fontSize: 14
    }
})

export default ViewTodoList;