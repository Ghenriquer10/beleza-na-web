import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;

    form{
        width: 100%;
    }

    label{
        margin: 5px 0;
    }

    input{
        height: 70px;
        width: 100%;
        border: 1px solid #E7E7E7;
        text-align: center;
        font-size: 1.5em;
        
        @media (min-width: 320px) and (max-width: 480px) {
            height: 50px;
        }
    }

    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }

    div:nth-child(3){
        flex-direction: row;
    }

    div.space{
        margin: 0px 20px 0 0;
    }


`;