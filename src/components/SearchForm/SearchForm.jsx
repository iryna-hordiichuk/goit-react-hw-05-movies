import {Wrapper, Input, Icon} from "./SearchForm.styled";

const SearchForm = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

export default SearchForm;