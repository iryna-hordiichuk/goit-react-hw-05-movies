import styled from 'styled-components';

export const ReviewsList = styled.ul`
display: flex;
align-items: column;
gap: ${p => p.theme.space[6]}px;

`;

export const ReviewAuthor = styled.h3`
color: ${props => props.theme.white};
font-size: ${props => props.theme.fontSizes.l};
font-weight: ${props => props.theme.fontWeights.bold};

`;

export const ReviewText = styled.p`
color: ${props => props.theme.primaryText};
font-size: ${props => props.theme.fontSizes.m};
font-weight: ${props => props.theme.fontWeights.normal};
margin-bottom: 16px;

`;