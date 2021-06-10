import { useState } from "react";
import useToggle from "../hooks/useToggle";
import EditTodo from "./editTodo";

const Todo=({text,todo,todos,setTodos})=>{

const [isEditing,toggle] = useToggle(false);

const deletehandler=()=>{
    setTodos(todos.filter(el => el.id !== todo.id))
}
const editHandler = (todoId,newTodo) => {
  
    const updatedTodos=todos.map(todo =>
        todo.id === todoId? {...todo,text:newTodo} :todo);
    setTodos(updatedTodos);
  };
const completeHandler=()=>{
    setTodos(todos.map((item)=>{
        if(item.id===todo.id){
            return {
                ...item,completed: !item.completed
            }
        }
            return item;
    }));
}
    return(
        <div className="todo">
             {isEditing ? <EditTodo text={text} id={todo.id} editHandler={editHandler} toggleEditForm={toggle}/>:
             <>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}
           
            </li>
            <button onClick={toggle}className="edit-btn"><i className="fas fa-user-edit"></i></button>
            <button onClick={completeHandler}className="complete-btn"><i className="fas fa-check-circle"></i></button>
            <button onClick={deletehandler}className="trash-btn"><i className="fas fa-trash"></i></button>
             </>}
             </div>
    );
};

export default Todo;