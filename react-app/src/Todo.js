import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Todo({todo, toogleTodo}) {
    
    function handleTodoClick() {
        toogleTodo(todo.id)
    }

      
    return (
       
        <Box sx={{ p: 1}}>
             <Paper elevation={3} sx={{ p: 1}}>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >             
                    <Grid item p={1} xs={12}>
                            <FormGroup>
                                <FormControlLabel 
                                    onChange={handleTodoClick} 
                                    control={
                                        <Checkbox
                                            checked={todo.completed}
                                        />
                                    } 
                                    label={todo.name} 
                                />
                            </FormGroup> 
                    </Grid>
                </Grid>
            </Paper>
        </Box>
      
    )

}    