import styled from 'styled-components';
import background from 'assets/images/corona.gif';

export const GridStyle = styled.div`
    display: grid;
    grid-template-columns: 65% 30%;
    grid-gap: 20px;
`;

export const Inline = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 8px;
`;

export const Link = styled.a`
    cursor:pointer;
    margin: auto 0;
    color: blueviolet;
`;

export const BackgroundImage = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    height: 600px;
    background-position: center;
    background-position-y: 69px;
`;

export const MainContainer = styled.div`
    position: relative;
    height: 250px; 
`;

export const CardContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.3s ease; 
`;

export const FrontCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`;

export const BackCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg)
`;