import { faBars, faEdit, faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
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
    const [a, setA] = useState(-1)
    const showHide = (index) => {
        console.log(a);
        if (a != index) return setA(index);
        else return setA(-1);
    }

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

    const editTask = (index) => {
        const action = { type: "EDIT__TASK", payload: data[index].title };
        console.log(action.payload);
        dispatch(action);
    }
    const saveTask = () => {
        const action = { type: "SAVE__TASK", payload: data.title = value };
        console.log(action)
        dispatch(action);
    }

    return (
        <TodosWrapper>
            <div className="w-100 d-flex mb-3">
                <input type="text" onChange={typing} className={`form-control me-3`} value={value} placeholder="Writing todos" />
                <Button color={"primary"} className="me-2" onClick={add}><FontAwesomeIcon icon={faPlus} /></Button>
                <Button color={"primary"} onClick={saveTask}><FontAwesomeIcon icon={faSave} /></Button>
            </div>
            <div className={"w-100 tasks"}>
                <ListGroup className={"rouded bg-transparent"}>
                    {
                        data?.map((value, index) =>
                            <ListGroupItem className="mb-1 d-flex justify-content-between align-items-center">
                                <span>{value.title}</span>
                                <div className="d-flex">
                                    <div className='content d-flex align-items-center justify-content-between'>
                                        <div className={`components me-2 ${a == index ? "comp__hide" : ""}`}>
                                            <Button color="warning"
                                                onClick={() => editTask(index)}
                                                className={"me-2"}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button color="danger" onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faTrash} /></Button>
                                        </div>
                                    </div>
                                    <Button color="dark" className="shadow-none" onClick={() => showHide(index)}><FontAwesomeIcon icon={faBars} /></Button>
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
