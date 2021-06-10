import { v4 as uuidv4 } from 'uuid';
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";

const Form=({inputText,setInputText,todos,setTodos,setStatus})=>{
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler =(e)=>{
      e.preventDefault();
      setTodos([
        ...todos,{id : uuidv4() ,text : inputText, completed:false}
      ]);
      setInputText("")
     
    };
    const statusHandler = (e)=>{
      setStatus(e.target.value);
      
    }
    return (
      
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i class="far fa-calendar-plus"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">Show All Tasks</option>
            <option value="completed">Completed tasks</option>
            <option value="uncompleted">Show Active tasks</option>
          </select>
        </div>
      </form>
    );
}

export default Form;