import IconLink from 'components/IconLink';
import Row from 'components/Row';
import Spacer from 'components/Spacer';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <Row justifyContent="center" fullWidth>
      <IconLink src={FaTwitter} href="https://twitter.com/chriskrogh_" />
      <Spacer width={16} />
      <IconLink
        src={FaLinkedin}
        href="https://www.linkedin.com/in/christopherkrogh/"
      />
      <Spacer width={16} />
      <IconLink src={FaGithub} href="https://github.com/chriskrogh" />
      <Spacer width={16} />
      <IconLink src={FaEnvelope} href="mailto:chris.krogh@outlook.com" />
    </Row>
  );
};

export default Contact;
