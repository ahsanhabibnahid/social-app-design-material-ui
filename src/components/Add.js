import { Fab, Tooltip, Container, TextField, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, FormControl, Button, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import MuiAlert from '@mui/material/Alert';
import { useStyles } from './CustomCss'

const Alert1 = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Add = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenAlert(false);
      };

    return (
        <div>
            <Tooltip title="Add" aria-label='add' onClick={() => setOpen(true)}>
                <Fab color='primary' className={classes.fab}>
                    <AddCircleIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.modalContainer}>
                    <form className={classes.form} autoComplete='off'>
                        <div className={classes.item}>
                            <TextField id="standard-basic" variant="standard" label="title" size='small' style={{ width: '100%' }} />
                        </div>
                        <div className={classes.item}>
                            <TextField id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                defaultValue="tell your story"
                                variant="standard"
                                size='small'
                                style={{ width: '100%' }} />
                        </div>
                        <div className={classes.item}>
                            <TextField select label='Visibility' value='public'>
                                <MenuItem value='public'>Public</MenuItem>
                                <MenuItem value='private'>Private</MenuItem>
                                <MenuItem value='unlisted'>Unlisted</MenuItem>

                            </TextField>
                        </div>

                        <div className={classes.item}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Who can comment? </FormLabel>
                                <RadioGroup>
                                    <FormControlLabel
                                        value="Everybody"
                                        control={<Radio size='small' />}
                                        label="Everybody"

                                    />
                                    <FormControlLabel
                                        value="Friends"
                                        control={<Radio size='small' />}
                                        label="Friends"
                                    />
                                    <FormControlLabel
                                        value="Nobody"
                                        control={<Radio size='small' />}
                                        label="Nobody"
                                    />
                                    <FormControlLabel
                                        value="Custom"
                                        disabled
                                        control={<Radio size='small' />}
                                        label="Custom (Premium)"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className={classes.item}>
                            <Button variant='outlined' color='primary' style={{ marginRight: 20 }} onClick={()=>setOpenAlert(true)}>Create</Button>
                            <Button variant='outlined' color='secondary' onClick={() => setOpen(false)}>Cancel</Button>
                        </div>

                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Add;