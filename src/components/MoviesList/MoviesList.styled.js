import styled from 'styled-components';


export const MoviesListStyled = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 8px;
margin-left: 24px;
margin-right: 24px;

`;

export const MovieItem = styled.li`
color: ${props => props.theme.colors.primaryText};
font-size: ${props => props.theme.fontSizes.m};
text-align: center;

&:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);

  }

`;

export const MovieTitle = styled.h2`
padding: 4px;
margin-top: 8px;
margin-bottom: 0;
color: ${props => props.theme.colors.primaryText};

`;

export const MovieImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  border-radius: 5px;
`;

export const RealeseDate = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[2]}px;
`;

