import React from "react"
import styled from "styled-components"
import Item from "./Item"

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
`

const Title = styled.h1`
    color: #474A74;
    font-family: Roboto;
    font-size: 36px;
    padding: 5px;
`


const ListItems = props => {
    return (
        <Container>
            <Title>Todo List</Title>
            {props.items.map(item => 
                <Item key={item.id} item={item} markAsCompleted={props.markAsCompleted}/>)}
        </Container>
    )
}

export default ListItems