import React, { useState } from 'react';

import { Form, Button, Modal } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { edittask } from '../redux/action/action';
import style from "./edit.module.css"

const Edit = ({ task }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newtext, setNewText] = useState(task.text)
    const dispatch = useDispatch();
    const handelEdit = () => {
        dispatch(edittask(task.id, newtext))
    }
    return (
        <div >
            <Button variant="primary" onClick={handleShow} style={{ padding: "2px" }} className={style.btn}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  >
                        <Form.Group >

                            <Form.Control placeholder="Add Task" onChange={(e) => setNewText(e.target.value)} value={newtext} />

                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handelEdit(); handleClose() }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Edit