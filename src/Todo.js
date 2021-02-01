import React from 'react';
import "./Todo.css";
import db from './firebase';
import { List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core';


function Todo(props) {


    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Deadline"/>
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
        </List>
    )
}

export default Todo