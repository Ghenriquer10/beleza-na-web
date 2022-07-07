import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;

    h1.loading{
        text-align: center;
        font-size: 1.4em;
        margin: 100px 0;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 10px;
    }

    h2{
        font-size: 2.5em;
        margin-bottom: 30px;
        font-family: monospace;
        width: 95%;
        text-align: center;

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 1.0em;
            margin-bottom: 0;
            text-align: left;
            
        }
    }
`;

export const Content = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    gap: 10px;

    @media (min-width: 320px) and (max-width: 1024px) {
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
        box-shadow: 0 0 1em grey;

        @media (min-width: 320px) and (max-width: 1024px) {
            width: 100%;
            font-size: 0.7em;
        }
    }
    
    .data-product{
        width: 30%;

        @media (min-width: 320px) and (max-width: 1024px) {
            width: 100%;
        }
    }
`;