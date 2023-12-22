import styled from "styled-components";
import { SparklyText } from "./SparklyText";
import { FaGithub } from "react-icons/fa";

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-bottom: 4rem;
  margin-top: 100px;
  font-weight: 500;
`;

const StyledGithubButton = styled.a`
  margin: 0 auto;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  font-weight: 600;
  padding: 8px 18px;
  text-decoration: none;
  border-radius: 8px;
  font-size: 18px;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    margin-right: 0.5em;
  }
`;

function App() {
  return (
    <>
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
