import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { inject, Observer, observer, Provider } from 'mobx-react';

@inject('todosStore')
@observer
class TodoScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            desc: '',
            todos: [],
        }
    }

    onAddClicked = () => {
        if (this.state.text === "" || this.state.desc === "") {
            return;
        }
        if (this.state.text.length < 4) {
            return
        }
        const temp = {
            name: this.state.text,
            desc: this.state.desc
        }
        this.props.todosStore.setTodo(temp)
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={this.state.text}
                        placeholder='Enter Todo'
                        onChangeText={val => this.setState({ text: val })}
                    />
                    <TextInput
                        style={styles.input}
                        value={this.state.desc}
                        placeholder='Enter Desc'
                        onChangeText={val => this.setState({ desc: val })}
                    />
                    <TouchableOpacity
                        style={styles.btnBox}
                        onPress={this.onAddClicked}
                    >
                        <Text style={styles.btnText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnBox}
                        onPress={() => this.props.navigation.navigate('listTodos')}
                    >
                        <Text style={styles.btnText}>View Todos</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 40
    },
    inputContainer: {
        flex: 1,
        marginVertical: 10
    },
    input: {
        flex: 1,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: 'black'
    },
    btnBox: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#575edb',
        borderWidth: 1,
        borderColor: '#575edb',
        borderRadius: 10,
        marginBottom: 10
    },
    btnText: {
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
        color: 'white'
    },
    divider: {
        borderWidth: 1
    },

});


export default TodoScreen;