import React from 'react';
import styles from './Features.module.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import Feature from '../Feature/Feature';
import accessAnywhere from '../../assets/images/icon-access-anywhere.svg'
import security from '../../assets/images/icon-security.svg'
import realTimeCollaboration from '../../assets/images/icon-collaboration.svg'
import anyFile from '../../assets/images/icon-any-file.svg'

const Features: React.FC = () => (
  <div className={styles.Features} data-testid="Features">
    <Container>
      <Row noGutters={true}>
        <Feature image={accessAnywhere} heading="Access your files, anywhere" message="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."/>
        <Feature image={security} heading="Security you can trust" message="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files"/>
        <Feature image={realTimeCollaboration} heading="Real-time collaboration" message="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."/>
        <Feature image={anyFile} heading="Store any type of file" message="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."/>
      </Row>
    </Container>
  </div>
);

export default Features;
