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

export const Content = styled.form`
    display: flex;
    width: 90%;
    height: 100%;
    gap: 10px;
    
    @media (min-width: 320px) and (max-width: 1024px) {
        flex-direction: column;
        width: 100%;
        padding: 10px;
    }    
    `;

export const CardData = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0 0 1em grey;


    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        font-size: 0.7em;
    }

    div{
        margin: 10px 0;
        width: 100%;
    }

    div.card-number, div.card-owner, div.card-data, div.card-password{
        display: flex;
        flex-direction: column;
    } 
    
    div.card-about{
        display: flex;
        flex-direction: row;
    }

    div.card-date{
        margin-right: 10px;
    }

    div.card-password{
        margin-left: 10px;
    }

    label{
        color: #D9D9D9;
    }

    input{
        width: 100%;
        height: 50px;
        border: 1px solid #D9D9D9;
        margin-top: 5px;
        text-align: center;
        font-size: 1.5em;
    }



`;

export const PriceData = styled.section`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 320px) and (max-width: 1024px) {
        padding: 0;
        width: 100%;
    }

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

    input{
        width: 70px;
        border: none;
        background-color: #EEEEEE;
        text-align: right;
        font-size: 1.1em;
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
        
        @media (min-width: 320px) and (max-width: 1024px) {
            font-size: 0.9em;
        }
    }

    button:hover{
        transition: 1s all;
        background-color: #D45A00;
        color: #FFFFFF;
    }
`;