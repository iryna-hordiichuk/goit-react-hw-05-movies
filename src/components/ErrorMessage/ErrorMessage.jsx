import { ErrorMessageStyled } from './ErrorMessage.styled';

const ErrorMessage = ({children}) => {
  return (
    <>
      <ErrorMessageStyled>{children}</ErrorMessageStyled>
    </>
  );
};

export default ErrorMessage;
