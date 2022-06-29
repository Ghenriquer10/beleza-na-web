import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    div.datas{
        display: flex;
        flex-direction: column;
        border: 1px solid #D5D5D5;
        padding: 20px;
    }

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 15px 0;
        text-transform: uppercase;
    }

    .discount{
        color: orange;
    }

    .total-value{
        font-weight: bold;
    }

    button{
        height: 50px;
        background-color: #FF6C00;
        border: none;
        box-shadow: 0 4px 2px -1px gray;
        border-radius: 5px;
        color: #FFF;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    button:hover{
        transition: 1s all;
        background-color: #EFE9E4;
        color: #FF6C00;
    }
`;