import { StyledForm, Input, StyledButton } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input type="text" name="query" />
      <StyledButton type="submit"> Search movies</StyledButton>
    </StyledForm>
  );
};

export default SearchForm;
