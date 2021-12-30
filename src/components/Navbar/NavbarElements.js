import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import {FaBars} from 'react-icons/fa';



export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#d1e0c5' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;

    @media screen and (max-width: 960px ) {
        transition: 0.8s all ease;
    }
    `;

    export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    `;

    export const NavLogo = styled(LinkR)`
    color: #2f2e41;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        color: #73d629;
        transition: 0.3s ease-out;
    }
    `;

    export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        color: #2f2e41;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
    `;

    export const MenuIcon = styled(FaBars)`
color: #2f2e41;
`

    export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
        }
    `;

    export const NavItem = styled.li`
    height: 80px;
    `;

    export const NavLinks = styled(LinkR)`
    color: #2f2e41;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
        color: #73d629;
        transition: 0.3s ease-out;
        border-bottom: 3px solid #73d629;
    }
    `;

    export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
    `

    export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #73d629;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #488216;
        color: #2f2e41;
        
    }
    `
