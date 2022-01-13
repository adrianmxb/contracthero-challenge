import React, { FC } from "react";
import styled from "styled-components";
import { ParsedPDF } from "../types";
import { BoxBase } from "./Common";
import { Text } from "./Text";

const OutputBox = styled(BoxBase)`
  flex-direction: column;
`;

interface IOutputProps {
  pdfContent: ParsedPDF | null;
}

export const Output: FC<IOutputProps> = (props) => {
  const { pdfContent } = props;
  return (
    <OutputBox>
      {pdfContent
        ? pdfContent.parsedContent.map((content, idx) => (
            <Text key={idx} text={content} page={idx}></Text>
          ))
        : null}
    </OutputBox>
  );
};
