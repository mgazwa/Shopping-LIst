import React from "react";
import {
    Button,
    Container, createStyles,
    FormGroup,
    InputLabel, makeStyles,
    MenuItem,
    Paper,
    Select,
    TextField, Theme,

} from "@material-ui/core";

export const NewItemForm = () => {
    const styles = makeStyles((theme: Theme) =>
         createStyles({
            form: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap'
            }
        })
    );
    const classes = styles();



    return (
        <Paper square elevation={3}>
            <Container maxWidth={'md'}>
                <form className={classes.form}>
                    <FormGroup>
                        <InputLabel>Item</InputLabel>
                        <TextField></TextField>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Quantity</InputLabel>
                        <TextField></TextField>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Unit</InputLabel>
                        <Select>
                            <MenuItem value={'g'}>grams</MenuItem>
                            <MenuItem value={'kg'}>kilograms</MenuItem>
                            <MenuItem value={'item'}>Item(s)</MenuItem>
                        </Select>
                    </FormGroup>
                    <Button variant='contained' color='primary'>Add</Button>
                </form>
            </Container>
        </Paper>
    );

}