import React, { useState, useReducer } from "react"
import { initialState, todoReducer } from "./reducer"
import styled from "styled-components"
import ListItems from "./ListItems"


const Container = styled.div`
    width: 70%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Input = styled.input`
    margin: 5px 0;
    padding: 5px;
    width: 200px;
    height: 20px;
    font-size: 18px;
    border: 1px solid #474A74;
    border-radius: 5px;
`

const Label = styled.label`
    color: #474A74;
    font-size: 14px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px;
`

const Button = styled.button`
    margin: 5px;
    padding: 5px;
    height: 40px;
    width: 100px;
    border: 1px solid #474A74;
    border-radius: 5px;
    color: #474A74;
`


const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const handleAdd = e => {
        e.preventDefault();
        dispatch({type: "ADD_ITEM", payload: newTodo});
        setNewTodo('');
    }

    const markAsCompleted = (id) => {
        dispatch({type: "TOGGLE_ITEM", payload: id})
    }

    const handleClear = e => {
        dispatch({type: "CLEAR_COMPLETED"})
    }

    return (
        <Container>
            <Form onSubmit={handleAdd}>
                <Input id="todo" value={newTodo} onChange={handleChange}/>
                <Label htmlFor="todo">New Todo</Label>
                <ButtonContainer>
                    <Button type="submit">Add Item</Button>
                    <Button onClick={handleClear}>Clear Completed</Button>
                </ButtonContainer>
            </Form>
            <ListItems items={state.todoList} markAsCompleted={markAsCompleted} />
        </Container>
    )
}

export default TodoList
