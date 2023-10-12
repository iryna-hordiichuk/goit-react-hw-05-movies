import styled from 'styled-components';


export const StyledForm = styled.form`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  position: relative;
  margin-bottom: 16px;
  margin-left: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  
  &:hover,
  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.hoverColor};

  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  border: none;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondaryText};
  }

`;
