import React from 'react';
import { FixedFooter, LinkIcon } from 'components/Pages/Dashboard'

export const Footer = ( ) => {
    return (
        <FixedFooter>
            <LinkIcon href="https://github.com/kundanmail55" className="fab fa-github" target="_blank"></LinkIcon>
            <LinkIcon href="https://twitter.com/kundanmail55" className="fab fa-twitter" target="_blank"></LinkIcon>
            <LinkIcon href="https://angel.co/u/kundan-kumar-sinha-1" className="fab fa-angellist" target="_blank"></LinkIcon>
        </FixedFooter>
    )
}