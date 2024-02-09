import { LocalizationMap, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pt_PT from "@react-pdf-viewer/locales/lib/pt_PT.json";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { searchPlugin } from "@react-pdf-viewer/search";
import "@react-pdf-viewer/search/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import { useEffect, useState } from "react";
import { FlexDiv, IconContainer, StyledModal } from "./styles";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface Props {
  isOpen: boolean;
  onCloseModal: () => void;
  selectedFile?: Blob | null;
}

export const MyModal = ({ isOpen, onCloseModal, selectedFile }: Props) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  const pageNavigationPluginInstance = pageNavigationPlugin();

  const {
    CurrentPageInput,
    GoToNextPageButton,
    GoToPreviousPage,
    NumberOfPages,
  } = pageNavigationPluginInstance;

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const searchPluginInstance = searchPlugin();
  const { ShowSearchPopoverButton } = searchPluginInstance;

  useEffect(() => {
    if (selectedFile) {
      const pdfObjectUrl = URL.createObjectURL(selectedFile);
      setPdfUrl(pdfObjectUrl);
    }
  }, [selectedFile]);

  const handleCloseModal = () => {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }
    onCloseModal();
  };

  const pt_PT_translations = {
    zoom: {
      zoomIn: "Aumentar zoom",
      zoomOut: "Diminuir zoom",
    },
  };
  return (
    <StyledModal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <IconContainer>
          <section>
            <ShowSearchPopoverButton />
          </section>
          <FlexDiv>
            <div>
              <GoToPreviousPage />
            </div>
            <div>
              <CurrentPageInput />
            </div>
            <div>
              <p>/</p>
              <NumberOfPages />
            </div>
            <div>
              <GoToNextPageButton />
            </div>
          </FlexDiv>
          <FlexDiv>
            <div>
              <ZoomOutButton />
            </div>
            <div>
              <ZoomPopover />
            </div>
            <div>
              <ZoomInButton />
            </div>
          </FlexDiv>
        </IconContainer>
        
        {pdfUrl && (
          <Viewer 
            localization={{pt_PT} as any as LocalizationMap}
            defaultScale={1.5}
            fileUrl={pdfUrl}
            plugins={[
              zoomPluginInstance,
              pageNavigationPluginInstance,
              searchPluginInstance,
            ]}
          />
        )}
      </Worker>
    </StyledModal>
  );
};
