import React from "react";
import Dropzone from "react-dropzone";
import { FileArrowUp, X } from "phosphor-react";
import clips from "../../../assets/images/clips.png";
import { StyledDropzone, FileList, ButtonDeleteItem } from "./styles";

interface DropzoneSectionProps {
  disabled: boolean;
  onDrop: (acceptedFiles: File[]) => void;
  attachedFiles: File[];
  handleRemoveFile: (index: number) => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const DropzoneSection: React.FC<DropzoneSectionProps> = ({
  disabled,
  onDrop,
  attachedFiles,
  handleRemoveFile,
  setIsModalOpen,
  setSelectedFile,
}) => {
  return (
    <section>
      <Dropzone disabled={disabled} onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <StyledDropzone {...getRootProps()}>
              <input {...getInputProps()} />
              <img src={clips} alt="" />
              <p>
                <b>Anexar arquivos</b>
              </p>
              <p>
                Arraste e solte os arquivos aqui, ou clique para selecionar os
                arquivos.
              </p>
            </StyledDropzone>
            <FileList>
              {attachedFiles.map((file: any, index: number) => (
                <section key={index}>
                  <FileArrowUp size={24} />
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedFile(file);
                    }}
                  >
                    {file.name}
                  </button>

                  <ButtonDeleteItem
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                  >
                    <X size={12} weight="bold" color="#fff" />
                  </ButtonDeleteItem>
                </section>
              ))}
            </FileList>
          </section>
        )}
      </Dropzone>
    </section>
  );
};

export default DropzoneSection;
