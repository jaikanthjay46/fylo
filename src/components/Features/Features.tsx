import React from 'react';
import styles from './Features.module.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import Feature from '../Feature/Feature';
import accessAnywhere from '../../assets/images/icon-access-anywhere.svg'
import security from '../../assets/images/icon-security.svg'

const Features: React.FC = () => (
  <div className={styles.Features} data-testid="Features">
    <Container>
      <Row noGutters={true}>
        <Feature image={accessAnywhere} heading="Access your files, anywhere" message="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."/>
        <Feature image={security} heading="Security you can trust" message="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files"/>
        <Feature image={accessAnywhere} heading="Access your files, anywhere" message="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."/>
        <Feature image={security} heading="Security you can trust" message="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files"/>
      </Row>
    </Container>
  </div>
);

export default Features;
