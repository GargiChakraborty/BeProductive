import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";
function EditTodo({id,text,editHandler,toggleEditForm}){
    const [value,handleChange,reset]=useInputState(text);
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            editHandler(id,value);
            reset();
            toggleEditForm();
            
        }}
        style={{marginLeft:"1rem", width:"100%"}}>
        <TextField margin="normal"
                   value={value} 
                   onChange={handleChange}
                   fullWidth
                   autoFocus/> 
        </form>
    );
    

}
export default EditTodo;