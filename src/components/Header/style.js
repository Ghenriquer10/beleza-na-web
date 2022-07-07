import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    flex-direction: column;
`;

export const Logo = styled.div`
    img{
        height: 50px;
        width: 90px;
    }
`;

export const MenuDesktop = styled.div`
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
    gap: 30px;
        @media (min-width: 320px) and (max-width: 768px) {
        }
        @media (min-width: 769px) and (max-width: 1024px) {
            width: 95%;
        }
        a{
            text-transform: uppercase;
            font-family: monospace;
            font-size: 1.3em;
        }
        
        .link {
            color: black;
            opacity: 0.6;
        }
        
        .link-active {
            color: orange;
        }
        
        .content {
            text-align: center;
        }
        @media (min-width: 481px) and (max-width: 1024px) {
            a{
                text-transform: uppercase;
                font-family: monospace;
                font-size: 1.1em;
                margin: 0 50px;
            }
        }
`;
