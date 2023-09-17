import styled from 'styled-components';


export const MoviesListStyled = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fit, 200px);
gap: 16px;

/* padding: ${props => props.theme.space[3]}px; */
margin: ${props => props.theme.space[6]}px;


`;

export const MovieItem = styled.li`
color: ${props => props.theme.colors.primaryText};
font-size: ${props => props.theme.fontSizes.m};

&:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 0 20px -1px ${p => p.theme.colors.hoverColor};
  }

`;

export const MovieTitle = styled.h2`
padding: 4px;
margin-top: 8px;
margin-bottom: 0;
color: black;

`;

export const MovieImage = styled.img`
  /* width: 100%; */
  height: 398px;
  object-fit: cover;
  border-radius: 5px;
`;

export const RealeseDate = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[2]}px;
`;

// export const Container = styled.div`
// display: grid;
// grid-template-columns: repeat(auto-fit, 200px);
// gap: 16px;
// `;

// export const CardWrapper = styled.div`
// border: 1px solid black;
// border-radius: 4px;

// > a {
//     text-decoration: none;
// }

// `;

