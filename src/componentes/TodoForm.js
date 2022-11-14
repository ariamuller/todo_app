import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false,
        });

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>
            <input 
            type='text' 
            placeholder='Atualizar Item' 
            value={input} 
            name='text' 
            className='todo-input edit' 
            onChange={handleChange} 
            ref={inputRef} 
            />
            <button className='todo-button edit'> Atualizar</button>
            </>
            ) : (
            <>
            <input 
            type='text' 
            placeholder='Adicionar Item' 
            value={input} 
            name='text' 
            className='todo-input' 
            onChange={handleChange} 
            ref={inputRef} 
            />
            <button className='todo-button'> Adicionar Item </button>
            </>
            )}
            <>
            <button className='todo-filter' onClick={ () => props.handleComplete()}>
                Concluídos
            </button>
            <button className='todo-filter' onClick={ () => props.handleTodo()}>
                a fazer
            </button>
            <button className='todo-filter' onClick={ () => props.handleAll()}>
                Todos
            </button>
            </>
        </form>
    );
};

export default TodoForm;