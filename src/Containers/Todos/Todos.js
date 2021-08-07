import { faEdit, faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import TodosWrapper from './TodosWrapper';

const Todos = (props) => {
    // const [value, setValue] = useState("");
    // const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const value = useSelector(state => state.value);
    const data = useSelector(state => state.tasks);
    const typing = (event) => {
        const action = { type: "SET__VALUE", payload: event.target.value }
        dispatch(action);
    }

    const add = () => {
        const action = { type: "ADD__TASK", payload: value };
        dispatch(action);
    }

    const deleteTask = (index) => {
        const action = { type: "DELETE__TASK", payload: index };
        dispatch(action);
    }

    const editTask = (event) => {
        const action = { type: "EDIT__TASK", payload: event.target.value };
        dispatch(action);
    }
    const saveTask = () => {
        let array = [...data]
        const action = { type: "SAVE__TASK", payload: value };
        console.log(action)
        dispatch(action);
    }

    return (
        <TodosWrapper>
            <div className="w-100 d-flex mb-3">
                <input type="text" onChange={typing} className={`form-control me-3`} value={value} placeholder="Writing todos" />
                <Button color={"primary"} onClick={add}><FontAwesomeIcon icon={faPlus} /></Button>
                <Button color={"primary"} className={"ms-2"} onClick={saveTask}><FontAwesomeIcon icon={faSave} /></Button>
            </div>
            <div className={"w-100 tasks"}>
                <ListGroup className={"rouded bg-transparent"}>
                    {
                        data?.map((value, index) =>
                            <ListGroupItem className="mb-1 d-flex justify-content-between align-items-center">
                                <span>{value.title}</span>
                                <div>
                                    <Button color="warning" className={"me-2"} onClick={editTask}><FontAwesomeIcon icon={faEdit} /></Button>
                                    <Button color="danger" onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faTrash} /></Button>
                                </div>
                            </ListGroupItem>
                        )
                    }

                </ListGroup>
            </div>
        </TodosWrapper>
    )
}

export default Todos
