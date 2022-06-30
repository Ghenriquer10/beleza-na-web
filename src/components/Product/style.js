import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid yellow;
    width: 95%;
    height: 90px;
    display: flex;
    align-items: center;
    border: 1px solid #DCDCDC;
    padding: 20px;
    margin: 10px 10px;

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
        
        p.name{
            width: 100%;
            text-align: center;
            margin-bottom: 15px;
        }
        
        p.price{
            display: block;
            font-weight: bold;
            display: flex;
            justify-content: flex-end;
        }
    }
    
    
`;