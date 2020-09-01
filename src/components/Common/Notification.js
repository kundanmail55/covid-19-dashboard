import React from 'react';
import styled, { keyframes } from 'styled-components';

const slides = keyframes`
    from { opacity: 1; } 
    to { opacity: 0;  right:-24%; };
`; 

const NotificationWindow = styled.div`
    position:fixed;
    top: 2%;
    right: 2%;
    z-index:9999999;
    box-shadow: 0 10px 35px rgba(0,0,0,.1);
    width:20%;
    background: ${p => p.background};
    color: white;
    border-radius: 5px;
    padding:15px;
    -webkit-animation: ${slides} 2s backwards; 
    animation: ${slides} 2s backwards;
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
`;

const NotificationTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4px;
`;

const NotificationValue = styled.div`
    font-size: 14px;
`;

export const Notification = ({type, title, alertValue}) => {
    return (
        <NotificationWindow background={type === 'success' ? '#A6D785' : '#FF3E0D'}>
            <NotificationTitle>{title}</NotificationTitle>
            <NotificationValue>{alertValue}</NotificationValue>
        </NotificationWindow>
    )
}