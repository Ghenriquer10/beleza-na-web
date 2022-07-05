import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 10px;
    }

    h2{
        font-size: 2.5em;
        margin-bottom: 30px;
        font-family: monospace;

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 1.0em;
            margin-bottom: 0;
            
        }
    }
`;

export const Content = styled.div`
    display: flex;
    width: 90%;
    height: 100%;

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
        padding: 10px;
    }

    .products-div{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #ffffff;

        @media (min-width: 320px) and (max-width: 480px) {
            width: 100%;
            font-size: 0.7em;
        }
    }
    
    .data-product{
        width: 30%;
        @media (min-width: 320px) and (max-width: 480px) {
            width: 100%;
        }
    }
`;