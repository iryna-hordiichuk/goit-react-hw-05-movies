import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  border-radius: ${p => p.theme.radii.normal};
`;

export const CastImg = styled.img`
  width: 100%;
  height: 398px;
  object-fit: cover;
`;
