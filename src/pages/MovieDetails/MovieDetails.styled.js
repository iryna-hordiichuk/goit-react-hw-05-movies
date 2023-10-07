import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainSection = styled.section`
  display: flex;
  /* flex-direction: column; */
  gap: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  padding-left: 16px;
`;

export const MovieTitle = styled.h1`
  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

// export const InfoList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: ${p => p.theme.space[6]}px;
// `;

export const SecondaryTitle = styled.h2`
  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[5]}px;
  

`;

export const Text = styled.p`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-right: ${p => p.theme.space[9]}px;
`;

export const AdditionalSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
  padding-left: ${p=> p.theme.space[6]}px;
  border-top: 1px solid black;
 
`;

export const AdditionalTitle = styled.h2`
  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const StyledNavLink = styled(NavLink)`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.l};

  &.active {
    background-color: ${p => p.theme.colors.hoverColor};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.hoverColor};
    color: ${p => p.theme.colors.white};
  }
`;