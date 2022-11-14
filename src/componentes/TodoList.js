import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList({}) {
    const [todos, setTodos] = useState([]);

    const [all, setAll] = useState([]);

    // Adicionar Nova Task
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        };

        const newTodos = [todo, ...all];

        setTodos(newTodos);
        setAll(newTodos); 
        console.log(todo, ...todos);
    };

    // Remover task
    const removeTodo = id => {
        const removeArray = [...all].filter(todo => todo.id !== id);

        setTodos(removeArray);
        setAll(removeArray); 
    };

    // Editar task
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        };

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
        setAll(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos);
        setAll(updateTodos); 
    };

    function renderComplete() {
        let filterItems = all.filter(result  => result.isComplete === true);
        setTodos(filterItems);
    }

    function renderIncomplete() {
        let filterItems = all.filter(result  => result.isComplete === false);
        setTodos(filterItems);
    }

    function renderAll() {
        let filterItems = all.filter(result  => result.isComplete === true || result.isComplete === false);
        setTodos(filterItems);
    }

  return (
    <div>
        <h1>Quais seus planos para hoje? </h1>
        <TodoForm onSubmit={addTodo} handleComplete={renderComplete} handleTodo={renderIncomplete} handleAll={renderAll} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/> 
    </div>
  );
}

export default TodoList;