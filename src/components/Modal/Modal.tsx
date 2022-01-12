import type { CSSProperties } from 'react';
import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { useScreenSize } from 'utils/useScreenSize';

import Button from '../Button';

const MOBILE_STYLES: CSSProperties = {
  position: 'relative',
  inset: 'auto',
  left: 0,
  top: 0,
  border: 'none',
  background: 'none',
  padding: 0,
  borderRadius: 0,
  width: '100vw',
  height: '100vh',
};

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
`;

export type Props = {
  isOpen: boolean;
  close: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, close, children }) => {
  const screenSize = useScreenSize();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        content: {
          ...(screenSize !== 'desktop' ? MOBILE_STYLES : {}),
          backgroundColor: 'black',
          position: 'relative',
        },
      }}
    >
      <CloseButtonWrapper onClick={close}>
        <Button onClick={close}>
          <FaTimesCircle className="icon-link" />
        </Button>
      </CloseButtonWrapper>
      {children}
    </ReactModal>
  );
};

export default Modal;
