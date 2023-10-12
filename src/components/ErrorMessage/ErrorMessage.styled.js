import styled from 'styled-components';

export const ErrorMessageStyled = styled.p`
  position: relative;
  margin-top: ${props => props.theme.space[6]}px;
  color: red;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xl};
`;
