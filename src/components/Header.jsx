import React, { useRef, useState } from "react";
import { Container, Navbar, Button, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

export default function Header({ sendDataToMainComponent }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const formwrapper = useRef();
    const [formData, setFormData] = useState({
        id: "", title : '',details : '',startdate : '',enddate : '',priority : '',type : '',person : '',subtask : '',files : ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        formData.id = uuidv4();
        sendDataToMainComponent(formData);
        handleClose();
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevent) => ({
            ...prevent,
            [name] : value,
        }))
    }
    return (
        <>
            <Navbar className="bg-body-tertiary container-fluid" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className="me-auto" href="#home">Task Management</Navbar.Brand>
                    <Button variant="primary" size="sm" onClick={handleShow}>Create Task</Button>
                </Container>
            </Navbar>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form ref={formwrapper}>
                        <div className="form-group mb-2">
                            <label className="form-label">Title</label>
                            <input onChange={handleChange}className="form-control" name="title" type="text" maxLength={100} placeholder="write task title" required />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <label className="form-label">Start Date</label>
                                    <input onChange={handleChange}className="form-control" name="startdate" type="date" placeholder="start date" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <label className="form-label">End Date</label>
                                    <input onChange={handleChange}className="form-control" name="enddate" type="date" placeholder="start date" required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label">Priority</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange}className="form-check-input" value="low" type="radio" name="priority" id="low" required />
                                    <label className="form-check-label" htmlFor="low">
                                        Low
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange}className="form-check-input" value="mediun" type="radio" name="priority" id="mediun" required />
                                    <label className="form-check-label" htmlFor="mediun">
                                        Mediun
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChange}className="form-check-input" value="high" type="radio" name="priority" id="high" required />
                                    <label className="form-check-label" htmlFor="high">
                                        High
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className="form-label">Select type</label>
                                    <select name="type" onChange={handleChange}className="form-control" required>
                                        <option value="">select task type</option>
                                        <option value="todo">To-Do</option>
                                        <option value="ongoing">Ongoing</option>
                                        <option value="done">Done</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className="form-label">Select person</label>
                                    <select name="person" onChange={handleChange}className="form-control" required>
                                        <option value="">select person</option>
                                        <option value="person-1">Person-1</option>
                                        <option value="person-2">Person-2</option>
                                        <option value="person-3">Person-3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className="form-label">Assign sub Task</label>
                                    <select name="subtask" onChange={handleChange}className="form-control">
                                        <option>select sub task</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-2">
                                    <label className="form-label">Upload files</label>
                                    <input onChange={handleChange}className="form-control" name="files" type="file" multiple accept="image/*,.pdf" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Description</label>
                            <textarea name="details" onChange={handleChange}className="form-control" rows={3} maxLength={150} required>

                            </textarea>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="btn-group">
                                <Button variant="primary" onClick={handleSubmit} type="submit">Submit</Button>
                                <Button variant="danger" onClick={handleClose}>Close</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}