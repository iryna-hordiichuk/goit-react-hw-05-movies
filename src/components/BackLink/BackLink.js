import { StyledLink } from "./BackLink.styled";
import {HiArrowLeft} from 'react-icons/hi';


const BackLink = ({ to, children }) => {
    return (
      <StyledLink to={to}>
        <HiArrowLeft size="24" />
        {children}
        {/* children is text 'Back to ?? ...' */}
      </StyledLink>
    );
  };
  
  export default BackLink;