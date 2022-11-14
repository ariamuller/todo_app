import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { RiEditCircleFill } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    // Submit Update
    const submitUpdate = value => {
        updateTodo(edit.id, value, edit.isComplete)
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    };

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>

            <div key={todo.id} >
                {todo.text}
            </div>

            <div className='icons'>
                <AiFillCheckCircle onClick={() => completeTodo(todo.id)} className='complete-icon' alt='Completar Item' size={25} />
                <RiEditCircleFill onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' alt='Editar Item' size={25} />
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' alt='Remover Item' size={25} />
            </div>
        </div>
    ));
};

export default Todo;