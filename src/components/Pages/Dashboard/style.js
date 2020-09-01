import styled from 'styled-components';

export const NavbarStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #f6f6f7;
    height: 5%;
    z-index: 999;
    padding: 1% 2%;
`;

export const NavTitle = styled.h1`
    font-weight: bolder;
    font-size: 20px;
`;

export const LayoutStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 5px;
    padding: 20px;
    margin-bottom: 3%;
`;

export const GridStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
    margin: 1% 2% 2%;
`;

export const CountryStyle = styled.h1`
    background: linear-gradient(152deg, rgba(2,0,36,1) 0%, rgba(255,153,51,1) 0%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 53%, rgba(19,136,8,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline;
    font-weight: bold;
`;

export const FixedFooter = styled.div`
    text-align: center;
    width: 100%;
    background: #f6f6f7;
    position: fixed;
    bottom: 0px;
`;

export const LinkIcon = styled.a`
    cursor:pointer;
    margin: 10px;
    color: blueviolet;
    text-decoration: none;
    font-size: 26px;
`;