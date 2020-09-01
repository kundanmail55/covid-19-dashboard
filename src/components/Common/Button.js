import styled from 'styled-components';

export const Button = styled.button`
    color: ${props => props.primary ? 'white' : props.secondary ? '#6c757d': '#ffffff'};
    background-color: ${props => props.primary ? '#3986D3' : props.secondary ? '#f1f1f1': '#3B4753'};
    border: none;
    padding: 15px;
    margin: 5px;
    font-size: 16px;
    border-radius: 5px;

    &:hover {
        color: rgba(108,117,125,.6);
        background-color: rgba(108,117,125,.0627451);
        border: 1px solid lightgrey
    } 
    &:disabled {
        pointer-events: none;
        background: #dddddd;
    }
`;