import styled from "styled-components";

const TodosWrapper = styled.div`
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f2f2f2;
    .tasks {
        max-height: 285px;
        overflow: auto;
    }
    .content {
    min-width: 100px;
    height: 40px;
    position: relative;
    overflow: hidden;
    }
    .components {
        position: absolute;
        top: -150%;
    }

    .comp__hide {
        top: 0 !important;
    }
`;

export default TodosWrapper;