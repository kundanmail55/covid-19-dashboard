import React from 'react';
import styled from 'styled-components';


const InputStyle = styled.input`
    box-shadow: 1px 0px 4px 0px rgba(0,0,0,.1);
    height: 20px;
    width: 90%;
    margin: 10px;
    padding: 10px;
    color: rgba(108,117,125,.6);
    border-radius: 3px;
    border: none;

    &:focus {
        border: none;
        outline: none;
    }

    &::-webkit-input-placeholder {
        color: rgba(108,117,125,.6);
    }
`;


export const Input = ({type, placeholder, onChange}) => {
    return <InputStyle type={type === 'registrationPassword' ? 'password': type} placeholder={placeholder} onChange={(e) => onChange(type, e.target.value)}/>
}

