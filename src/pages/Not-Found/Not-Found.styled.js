import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  text-align: center;
  padding: ${p => p.theme.space[4]}px;
  margin-top: 24px;
`;

export const NotFoundTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.xxl};
  color: ${p => p.theme.colors.primaryText};
`;

export const NotFoundMessage = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.white};
  font-weight: bold;
  margin-top: ${p => p.theme.space[2]}px;
`;
