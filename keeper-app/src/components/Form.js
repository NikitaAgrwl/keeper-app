import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import { addNote } from '../redux/action';
import '../css/Form.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 350,
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 5, 4),
        display: "flex",
        flexDirection: "column",
    },
}));


function Form(props) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const [formData, setFormData] = useState({id:'', title:'', content:''});

    
    function handleChange(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        })
    }

    function handleClose() {
        props.setShowForm(false);
    }

    function handleSubmit() {
        formData.id= Date.now();
        props.addNote(formData);
        handleClose();
    }

    return (
        <div className={classes.root} ref={rootRef}>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}
            >
                <div className={classes.paper}>
                    <div className='createNoteHeader'>
                        <h2 id="server-modal-title">Add Note</h2>
                        <button onClick={handleClose} className='closeBtn'>
                            X
                        </button>
                    </div>
                    <hr style={{ height: '1px', backgroundColor: 'gray', width: '100%' }}></hr>
                    <TextField
                        id="outlined-basic"
                        name="title"
                        value={formData.title}
                        label="Outlined"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextareaAutosize
                        aria-label="minimum height"
                        name="content"
                        value={formData.content}
                        minRows={10}
                        placeholder="Note details"
                        onChange={handleChange}
                    />
                    <Button onClick={handleSubmit} className='createBtn' variant="contained" color="secondary">
                        Add Note
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        // noteData: state.noteReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (data) => { dispatch(addNote(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);