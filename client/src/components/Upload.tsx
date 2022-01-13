import React, {
  ChangeEventHandler,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { ParsedPDF } from "../types";
import { BoxBase, Button } from "./Common";

const UploadBox = styled(BoxBase)`
  gap: 0.5em;
`;

interface IUploadProps {
  onChange: (pdf: ParsedPDF | null) => void;
}

export const Upload: FC<IUploadProps> = (props) => {
  const { onChange } = props;
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const resetFile = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    setFile(null);
  };

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.currentTarget;
    if (!files || files.length < 1) {
      resetFile();
      return;
    }
    setFile(files[0]);
  };

  useEffect(() => {
    const analyzePdfRequest = async (file: File) => {
      try {
        const formData = new FormData();
        formData.append("file", file, file.name);

        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/analyze`, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        onChange(data);
      } catch (e) {
        resetFile();
      }
    };

    if (!file) {
      onChange(null);
    } else {
      analyzePdfRequest(file);
    }
  }, [file, onChange]);

  return (
    <UploadBox>
      <Button>
        <label htmlFor="file_upload">Upload PDF</label>
      </Button>

      {file ? (
        <Button
          onClick={() => {
            resetFile();
          }}
        >
          Clear
        </Button>
      ) : null}
      <input
        id="file_upload"
        ref={inputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={onFileChange}
      ></input>
    </UploadBox>
  );
};
