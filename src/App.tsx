import styled from 'styled-components';
import { SparklyText } from './SparklyText';
import { FaGithub } from 'react-icons/fa';

const StyledSparkleSVG = styled.svg`
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0 auto;
 margin-top: 5rem;
 fill: #8BE9FD;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-bottom: 4rem;
  margin-top:0;
  font-weight: 500;
`;

const StyledGithubButton = styled.a`
  margin: 0 auto;
  width: max-content;
  display: flex; 
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  font-weight: 600;
  padding:8px 18px;
  text-decoration: none;
  border-radius: 8px;
  font-size: 18px;
  transition: all .5s ease;

  &: hover {
    background-color: rgba(255,255,255 ,.8);
  }

  svg {
    margin-right: .5em;
  }
`;

function App() {
  return (
    <>
      <StyledSparkleSVG width="50" height="50" viewBox="0 0 1200 1200">
        <path d="m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z" />
      </StyledSparkleSVG>
      <StyledTitle>
        <SparklyText>
          <span>react-sparkly-text</span>
        </SparklyText>
      </StyledTitle>

      <StyledGithubButton
        href="https://github.com/mburakerman/react-sparkly-text"
        target="_blank"
      >
        <FaGithub /> Github
      </StyledGithubButton>
    </>
  );
}

export default App;
