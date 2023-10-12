import { StyledLink } from "./BackLink.styled";
import {HiArrowLeft} from 'react-icons/hi';


const BackLink = ({ to, children }) => {
    return (
      <StyledLink to={to}>
        <HiArrowLeft size="24" />
        {children}
      </StyledLink>
    );
  };
  
  export default BackLink;

  // 💕the children prop is a special prop that 
  // allows you to pass elements or content between 
  // the opening and closing tags

  // ✨in his component children prop is expected to receive text content, 
  // specifically the text you want to display as a link label.
  // Using children props allows you to customize the link text as needed
  //  for different use cases.

