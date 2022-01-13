import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10vw;
`;

export const BoxBase = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #0099ff;
  border-radius: 10px;
  font-weight: 500;
  padding: 0.7em;
  text-align: center;
  :hover {
    color: #ffffff;
    background-color: #0099ff;
  }
`;

export const H2 = styled.h2`
  margin: 0.5em 0;
`;

export const H1 = styled.h1`
  margin: 0.5em 0;
`;
