import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1.loading{
        text-align: center;
        font-size: 1.4em;
        margin: 100px 0;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
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

export const Message = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    color: #FF7800;
    text-transform: uppercase;
    text-align: center;

    @media (min-width: 320px) and (max-width: 1024px) {
        flex-direction: column;
        font-size: 0.5em;
        margin: 0;
        
        svg{
            height: 50px;
            width: 50px;
        }

    } 
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    height: 100%;
    
    
    @media (min-width: 320px) and (max-width: 1024px) {
        flex-direction: column;
    } 
    
    .title{
        text-transform: uppercase;
        font-size: 0.8em;
        font-family: monospace;
        color: #999999;
        
        @media (min-width: 320px) and (max-width: 1024px) {
            font-size: 1.1em;
            margin: 20px 0 5px 0;
        } 
    }
`;

export const OwnerCard = styled.div`
    height: 45%;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 5px;

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        font-size: 0.7em;
        margin: 0;
    }

    .card-area{
        background-color: #FFFFFF;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        box-shadow: 0 0 1em grey;
    }

    .about input{
        width: 100%;
        text-align: center;
        font-size: 1.5em;
        margin: 20px 0;
        border: none;
        
        @media (min-width: 320px) and (max-width: 1024px) {
            margin: 5px 0;
        }
    }
`;

export const ProductData = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    margin: 0 5px;

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        margin: 0;
        font-size: 0.7em;
    }

    .product-area{
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #FFFFFF;
        padding: 10px;
        box-shadow: 0 0 1em grey;


    }
    
    .poduct-item{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #DCDCDC;
    }

    .image{
        display: flex;
        align-items: center;
        justify-content: center;
        
        img{
            height: 80px;
            width: 80px;
        }
    }

    .about{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        p.name{
            width: 100%;
            text-align: center;
        }
    }
    
`;

export const PriceData = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 5px;

    @media (min-width: 320px) and (max-width: 1024px) {
        padding: 0;
        width: 100%;
        margin: 0;
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

        input{
            color: orange;
        }
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

`;

