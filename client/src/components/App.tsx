// this is necessary to import tthe styled components types for the css prop in typescript
import type {} from "styled-components/cssprop";
import React, { FC, useState } from "react";
import { Upload } from "./Upload";
import styled from "styled-components";
import { Output } from "./Output";
import { ParsedPDF } from "../types";
import { Container, H1 } from "./Common";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App: FC = () => {
  const [pdfContent, setPdfContent] = useState<ParsedPDF | null>(null);
  return (
    <Container>
      <H1>PDF Analyzer</H1>
      <Main>
        <Upload onChange={setPdfContent} />
        <Output pdfContent={pdfContent}></Output>
      </Main>
    </Container>
  );
};
