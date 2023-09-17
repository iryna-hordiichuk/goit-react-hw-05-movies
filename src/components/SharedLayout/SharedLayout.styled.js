import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 0 16;

`;

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
gap: 12px;
padding: 8px 0;
margin-bottom: ${props => props.theme.space[5]}px;
border-bottom: 1px solid ${props => props.theme.primaryText};

> nav {
    display: flex;
}
`;

export const Logo = styled.p`
font-weight: ${props => props.theme.fontWeights.bold};
margin: 0;

`;

export const Link = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
/* text-decoration: none; */
color: black;
font-weight: ${props => props.theme.fontWeights.normal};

&.active{
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accentColor};
}

`;