import React from 'react';
import styles from './Hero.module.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import heroImage from '../../assets/images/illustration-intro.png'

const Hero: React.FC = () => (
  <div className={styles.Hero} data-testid="Hero">
    <Container>
      <Row> 
        <Column size={12} >
          <img className={styles.heroImage} src={heroImage} alt="heroImage" />
        </Column>
      </Row>
      <Row>
        <Column size={12}>
          <h1 className="title">All your files in one secure location, Accessible Anywhere</h1>
        </Column>
        <Column size={12}>
          <p className={styles.lead}> Fylo stores all of your most important files in one secure location. Access them whenevr you need, share and collaborate with friends family, and co-workers. </p>
        </Column>
        <Column horizontalAlignment="center">
          <button className="btn btn-primary">Get Started</button>
        </Column>
      </Row>
    </Container>
  </div>
);

export default Hero;
