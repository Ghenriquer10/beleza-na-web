import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;

    h2{
        font-size: 2.5em;
        margin-bottom: 30px;
        font-family: monospace;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 90%;
    height: 100%;

    .products-div{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #ffffff;
    }

    .data-product{
        width: 30%;
    }
`;