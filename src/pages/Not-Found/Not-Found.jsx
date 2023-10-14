import { NotFoundContainer, NotFoundTitle, NotFoundMessage } from "./Not-Found.styled";
import BackLink from "components/BackLink";

const NotFound = () => {
    return (
      <NotFoundContainer>
        <NotFoundTitle>Page Not Found</NotFoundTitle>
        <NotFoundMessage>Sorry, the page you are looking for does not exist.</NotFoundMessage>
        <BackLink to="/">Back to Home Page</BackLink>
      </NotFoundContainer>
    );
  };
  
  export default NotFound;