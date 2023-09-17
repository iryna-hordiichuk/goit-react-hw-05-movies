import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xxl};
  margin-top: ${props => props.theme.space[6]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.primaryText};
`;
