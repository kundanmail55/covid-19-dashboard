import React from 'react';
import { Button } from 'components/Common';
import { NavbarStyle, NavTitle } from './index';

export const Navbar = ({onClick}) => {
    return <NavbarStyle>
                <NavTitle>COVID-19</NavTitle>
                <Button side='end' onClick={() => onClick('signout')}>Logout</Button>
            </NavbarStyle>
}

