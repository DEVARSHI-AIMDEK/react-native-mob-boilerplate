// import { observable, action } from 'mobx-react';
import { makeObservable, observable, action } from 'mobx';

class TodosStore {

    constructor() {
        makeObservable(this, {
            todos: observable,
            setTodo: action,
        })
    }

    todos = [
        {
            name: 'Go Home',
            desc: 'Go home asap',
        },
        {
            name: 'Do Homework',
            desc: 'Complete homework'
        },
        {
            name: 'Play games',
            desc: 'Counter Strike'
        }
    ]

    setTodo = todo => {
        this.todos.push(todo)
    }
}

const todosStore = new TodosStore()
export default todosStore;