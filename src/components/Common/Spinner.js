import React from 'react';
import styled, {keyframes} from 'styled-components';

const SpinnerWrapper = styled.div`
    background-color: #f6f6f7; 
    color: #fff; 
    text-align:center;
    height: 100vh;
    width: 100vw;
`;

const spin = keyframes`
    to { -webkit-transform: rotate(360deg); }
`;

const Loader = styled.div`
    position: absolute;
    top: 48%;
    left: 48%;
    width: 50px;
    height: 50px;
    border: 6px solid blue;
    border-radius: 50%;
    border-top-color: #fff;
    animation: ${spin} 1s ease-in-out infinite;
    -webkit-animation: ${spin} 1s ease-in-out infinite;
`;

export const Spinner = () => <SpinnerWrapper><Loader/></SpinnerWrapper>