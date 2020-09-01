import React from 'react';
import styled from 'styled-components';


const CardStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 10px 35px rgba(0,0,0,.1);
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    background: ${props => props.type === 'Confirmed' ? 'rgba(255,7,58,.12549)' : 
                props.type === 'Active' ? 'rgba(0,123,255,.0627451)' :
                props.type === 'Recovered' ? 'rgba(40,167,69,.12549)' : 'rgba(108,117,125,.0627451)'};
`;

const CardHeading = styled.div`
    padding: 10px;
    color: ${props => props.type === 'Confirmed' ? 'red' : 
            props.type === 'Active' ? '#007bff' : 
            props.type === 'Recovered' ? '#28a745' : '#6c757d'};
    align-self: center;
    font-size: 18px;
    font-weight: bold;
`;

const CardSubHeading = styled.div`
    color: ${props => props.type === 'Confirmed' ? 'red' : 
            props.type === 'Active' ? '#007bff' : 
            props.type === 'Recovered' ? '#28a745' : '#6c757d'};
    align-self: center;
    font-size: 14px;
    font-weight: bold;
`;

const CardDetails = styled.div`
    color: black;
    align-self: center;
`;

export const Card = ({children, heading, subheading}) => {
    return <CardStyle type={heading}>
                <CardHeading type={heading}>{heading}</CardHeading>
                <CardSubHeading type={heading}>{subheading}</CardSubHeading>
                <CardDetails>{children}</CardDetails>
            </CardStyle>
}