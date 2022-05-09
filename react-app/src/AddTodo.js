import React, {useState} from "react";
import { Button, Grid, TextField } from "@mui/material";

export default function AddTodo({handleAddTodo}) {
    
    const [newTodoText, setNewTodoText] = useState("");
    
    function handleClickAddTodo(){
        handleAddTodo(newTodoText)
        setNewTodoText("")
    }

    return (
        <Grid  container spacing={1} style ={{padding: 2}}>  
            <Grid item style ={{width: '80%'}}>
                <TextField 
                    fullWidth  
                    autoFocus={true}
                    value={newTodoText}
                    onChange={(e) => {
                        setNewTodoText(e.target.value);
                    }}
                    label="Enter a new todo" 
                    variant="filled" 
                />
            </Grid>
            <Grid  item style ={{ display: "flex", width: "20%"}} alignItems="stretch">
                <Button 
                    style ={{ width: "100%"}}
                    onClick={handleClickAddTodo} 
                    variant="contained" 

                    color="primary"> Add
                </Button> 
            </Grid>
        </Grid>
    )
}
