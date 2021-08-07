import { createStore } from "redux";

const initialStore = {
    value: "",
    tasks: [
        { title: "Task 1", },
        { title: "Task 2", },
        { title: "Task 3", },
    ]
}

const reducer = (state = initialStore , action) => {

    switch (action.type) {
        case "SET__VALUE" : return {...state, value: action.payload};
        case "ADD__TASK" :
        if (action.payload.trim() === "") return state;
        return {...state, tasks: [...state.tasks, {title: action.payload}],  value : ""};
        case "DELETE__TASK" : const tasks = [...state.tasks];
        tasks.splice(action.payload,1);
        return {...state , tasks: tasks};
        case "EDIT__TASK" : return {...state, value: action.payload};

        case "SAVE__TASK" : return {...state, title: action.payload};

        default : return  state;
    }


}

const store = createStore(reducer);
export default store;