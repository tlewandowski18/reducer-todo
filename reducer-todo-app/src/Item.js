import React from 'react'
import styled from 'styled-components'

const ListItem = styled.p`
    color: #474A74;
    font-family: Roboto;
    font-size: 24px;
`

const Item = props => {
    return (
        <ListItem 
            onClick={() => props.markAsCompleted(props.item.id)}
            style={props.item.completed ? {textDecoration: "line-through"} : null}>{props.item.item}</ListItem>
    )
}

export default Item