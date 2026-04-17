import styled from "styled-components"
import colors from "../../utils/styles/colors"

export const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    text-align: start;
`

export const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: auto;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 200px;
    transition: 200ms;
    margin-right: 10px;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    };
    
`