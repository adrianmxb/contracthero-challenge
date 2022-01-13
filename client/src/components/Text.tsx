import React, { FC } from "react";
import styled from "styled-components";
import { H2 } from "./Common";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContent = styled.textarea`
  resize: none;
  overflow: auto;
  padding: 0.5em;
`;

interface ITextProps {
  text: string[];
  page: number;
}

export const Text: FC<ITextProps> = (props) => {
  const { page, text } = props;
  return (
    <TextWrapper>
      <H2>Page {page}</H2>
      <TextContent
        readOnly
        style={{ height: `${text.length}em` }}
        value={text.join("\n")}
      ></TextContent>
    </TextWrapper>
  );
};
