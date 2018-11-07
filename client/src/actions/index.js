import { todosRef, completedRef, pointsRef } from "../config/firebase";
import { FETCH_TODOS, FETCH_POINTS } from "./types";

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

// export const addPoints = (pointAmount) => async dispatch => {
//     pointsRef.child("data").push(pointAmount)
// };

// export const addPoints = (pointAmount) => 

export const fetchPoints = () => async dispatch => {
    pointsRef.on("value", snapshot => {
        dispatch({
            type: FETCH_POINTS,
            payload: snapshot.val()
        });
    })
}

export const fetchToDos = () => async dispatch => {
    todosRef.on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};