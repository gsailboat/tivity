import { todosRef, completedRef } from "../config/firebase";
import { FETCH_TODOS } from "./types";

export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
};

export const addComplete = newComplete => async dispatch => {
    completedRef.push().set(newComplete);
}

export const deleteToDo = deleteToDoId => async dispatch => {
    todosRef.child(deleteToDoId).remove();
};

export const changeToDo = (changeToDoId, nameChange) => async dispatch => {
    todosRef.child(changeToDoId).set(nameChange);
}

export const fetchToDos = () => async dispatch => {
    todosRef.on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};