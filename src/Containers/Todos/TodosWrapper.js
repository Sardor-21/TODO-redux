import styled from "styled-components";

const TodosWrapper = styled.div`
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f2f2f2;
    .tasks {
        max-height: 400px;
        overflow: auto;
    }
`;

export default TodosWrapper;